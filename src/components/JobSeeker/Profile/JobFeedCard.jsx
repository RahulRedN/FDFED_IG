import { useState, useEffect } from "react";

import Modal from "react-modal";

import { BsBoxArrowUpRight } from "react-icons/bs";
import { CalendarSearch, MailSearch } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { IoCloseCircle } from "react-icons/io5";

import RoleCard from "../FindJob/RoleCard";

const JobFeedCard = ({ job, date, idx, status }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow on component unmount
    };
  }, [modalIsOpen]);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 1000,
    },
    content: {
      top: "390px",
      left: "60vw",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      borderRadius: "10px",
      outline: "none",
      padding: "2rem",
      position: "fixed",
      width: "70vw",
      height: "90vh",
      overflowY: "scroll",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Optional shadow for the modal
      scrollbarWidth: "thin", // For Firefox
      scrollbarColor: "#4a4a4a #e5e5e5", // For Firefox
      zIndex: 1001,
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const color = (status) => {
    if (status === "Rejected") {
      return "bg-red-200 text-red-600 ";
    } else if (status === "Accepted") {
      return "bg-green-200 text-green-600";
    } else {
      return "bg-yellow-100 text-yellow-500";
    }
  };

  const getStatus = (status) => {
    if (status == null) {
      return "Pending";
    } else if (status) {
      return "Accepted";
    } else {
      return "Rejected";
    }
  };

  const options = { day: "numeric", month: "short", year: "2-digit" };

  return (
    <tr key={idx} className="border-b-2 border-gray-100">
      <td>{job.companyName}</td>
      <td className="flex items-center justify-between gap-2">
        <h1>{job.position}</h1>
        <span>
          <BsBoxArrowUpRight
            size={13}
            className="text-blue-500 cursor-pointer"
            strokeWidth={0.6}
            onClick={openModal}
          />
        </span>
      </td>
      <td>{date.toLocaleDateString("en-US", options)}</td>
      <td>{Object.keys(job.status).length}</td>
      <td>
        <span className={`p-2 rounded-2xl ` + color(getStatus(status))}>
          {getStatus(status)}
        </span>
      </td>
      <Modals
        key={idx}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        customStyles={customStyles}
        job={job}
      />
    </tr>
  );
};

export default JobFeedCard;

const Modals = ({ modalIsOpen, closeModal, customStyles, job }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="flex gap-96">
        <button onClick={closeModal}>
          <IoCloseCircle className="text-3xl" />
        </button>
        <h1 className="font-bold text-4xl text-center">{job.companyName}</h1>
      </div>

      <h1 className="mt-6 text-lg font-[600]">Job Description</h1>
      <p className="mt-2 text-[500] text-gray-500">{job.jobDesc}</p>

      <div className="w-fit mt-6 p-4 border flex flex-col gap-3 rounded shadow">
        <h1 className="font-[600]">Activity on InspiringGo</h1>
        <div className="flex gap-5">
          <div className="flex gap-1 items-center">
            <CalendarSearch size={19} />
            <h2>
              Hiring since{" "}
              {new Date(job?.postedDate).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </h2>
          </div>
          <div className="flex gap-1 items-center">
            <MailSearch size={19} />
            <h2>{job.totalPositions} oppurtunities posted</h2>
          </div>
          <div className="flex gap-1 items-center">
            <CgProfile size={21} />
            <h2>{job.totalPositions - job.vacancies} candidates hired</h2>
          </div>
        </div>
      </div>

      <h3 className="mt-4 font-[600]">Responsibility</h3>
      <ul className="ml-5 text-gray-500" style={{ listStyleType: "disc" }}>
        <br />
        {job?.responsibilities.map((res, idx) => (
          <li key={idx}>{res}</li>
        ))}
      </ul>

      <h1 className="mt-8 text-lg font-[600]">Qualifications</h1>
      <div className="flex mt-3 gap-3 items-stretch flex-wrap">
        {job?.skills.split(",").map((role, index) => (
          <RoleCard key={index} role={role} />
        ))}
      </div>

      <h1 className="mt-8 text-lg font-[600]">Benefits</h1>
      <div className="flex mt-3 gap-3 items-stretch flex-wrap">
        {job?.benefits.split(",").map((benifit, index) => (
          <p
            key={index}
            className="text-sm p-1 bg-gray-200 text-gray-500 rounded"
          >
            {benifit}
          </p>
        ))}
      </div>

      <h1 className="mt-8 text-lg font-[600]">Job Summary</h1>
      <ul className="ml-5 text-gray-500" style={{ listStyleType: "disc" }}>
        <br></br>
        <li>
          Posted on: {new Date(job?.postedDate).toLocaleDateString("en-US")}
        </li>
        <li>Vacancy : {job?.vacancies}</li>
        <li>Salary : ₹ {Number(job?.salary).toLocaleString("en-IN")}</li>
        {job?.location && <li>Location : {job?.location}</li>}
        <li>Job Nature : {job?.location ? "on Site" : "Work From Home"}</li>
      </ul>
    </Modal>
  );
};
