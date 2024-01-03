import { useState } from "react";
import toast from "react-hot-toast";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { db } from "../../../Firebase/config";
import { collection, addDoc } from "firebase/firestore";

import { addJob } from "../../../redux/companyReducer";

const PostJob = () => {
  const cmp = useSelector((state) => state.company);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [Data, SetData] = useState({
    position: "",
    joiningDate: "",
    experience: "",
    salary: "",
    skills: "",
    benefits: "",
    totalPositions: "",
    jobDesc: "",
    responsibilities: "",
  });

  const SubmitEventHandler = async (e) => {
    e.preventDefault();
    const alphaRegex = /^[a-zA-Z\s]+$/;
    const parsedDate = new Date(Data.joiningDate);
    const today = new Date();

    if (Data.position.trim() === "") {
      toast.error("Job Position cannot be empty", {
        className: "text-red-400",
      });
      return;
    }
    if (Data.joiningDate.trim() === "") {
      toast.error("Joining Date cannot be empty", {
        className: "text-red-400",
      });
      return;
    }
    if (parsedDate < today) {
      toast.error("Joining Date cannot be in the past", {
        className: "text-red-400",
      });
      return;
    }

    if (!alphaRegex.test(Data.position.trim())) {
      toast.error("Job Position should contain only alphabets", {
        className: "text-red-400",
      });
      return;
    }

    if (Data.experience.trim() === "") {
      toast.error("Experience cannot be empty", { className: "text-red-400" });
      return;
    }

    if (Data.salary.trim() === "") {
      toast.error("Salary cannot be empty", { className: "text-red-400" });
      return;
    }

    if (Data.skills.trim() === "") {
      toast.error("Skills cannot be empty", { className: "text-red-400" });
      return;
    }

    if (Data.benefits.trim() === "") {
      toast.error("Benifits cannot be empty", { className: "text-red-400" });
      return;
    }

    if (Data.totalPositions.trim() === "") {
      toast.error("Total Positions cannot be empty", {
        className: "text-red-400",
      });
      return;
    }

    if (Data.jobDesc.trim() === "") {
      toast.error("Job Description cannot be empty", {
        className: "text-red-400",
      });
      return;
    }

    if (Data.responsibilities.trim() === "") {
      toast.error("Job Responsibilities cannot be empty", {
        className: "text-red-400",
      });
      return;
    }

    try {
      const collectionRef = collection(db, "jobs");
      const currDate = new Date();
      const jobData = {
        ...Data,
        responsibilities: Data.responsibilities.split(";"),
        companyName: cmp.data.name,
        companyId: cmp.data.id,
        vacancies: Data.totalPositions,
        postedDate: currDate.toLocaleString(),
        status: {},
      };

      const res = await addDoc(collectionRef, jobData);
      if (res) {
        dispatch(addJob({ ...jobData, id: res.id }));
        toast.success("Job Posted!");
        nav("/company/postedjobs");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error Occured!");
    }
  };

  return (
    <div className={"min-h-screen p-6 bg-indigo-100"}>
      <div className="border-none h-[calc(100vh-5rem)] p-10">
        <h1 className="text-4xl mt-[-1rem] font-semibold text-center">
          POST JOB
        </h1>
        <form className={"mt-10 w-full"}>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label className="ml-1 rounded-lg text-base font-semibold">
                Job Position
              </label>
              <input
                type="text"
                id="position"
                onChange={(event) =>
                  SetData({ ...Data, position: event.target.value })
                }
                className={
                  "border border-none rounded-md bg-white w-full p-2 outline-none "
                }
                placeholder="Ex: Software Developer"
              />
            </div>
            <div className="flex flex-col gap-1 w-fit items-stretch">
              <label className="ml-1 text-base font-semibold">
                Joining Date
              </label>
              <input
                type="date"
                className="p-2 rounded-md"
                onChange={(event) =>
                  SetData({ ...Data, joiningDate: event.target.value })
                }
              />
            </div>
            <div className="w-full flex gap-4">
              <div className="flex flex-col gap-1 w-full flex-[1]">
                <label className="ml-1 text-base font-semibold">
                  Experience
                </label>
                <input
                  type="text"
                  id="exp"
                  onChange={(event) =>
                    SetData({ ...Data, experience: event.target.value })
                  }
                  className="border border-none rounded-md bg-white w-full p-2 outline-none"
                  placeholder="Ex:10 years"
                />
              </div>
              <div className="flex flex-col gap-1 w-full flex-[2]">
                <label className="ml-1 text-base font-semibold">Salary</label>
                <input
                  type="text"
                  id="sal"
                  onChange={(event) =>
                    SetData({ ...Data, salary: event.target.value })
                  }
                  className="border border-none rounded-md bg-white w-full p-2 outline-none"
                  placeholder="Ex: 10000000"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full gap-4 mt-8">
            <div className="w-full flex gap-4 flex-[6]">
              <div className="flex flex-col gap-1 w-full flex-[1]">
                <label className="ml-1 text-base font-semibold">
                  Required Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  onChange={(event) =>
                    SetData({ ...Data, skills: event.target.value })
                  }
                  className="border border-none rounded-md bg-white w-full p-2 outline-none"
                  placeholder="Ex: C++, Java, Python"
                />
              </div>
              <div className="flex flex-col gap-1 w-full flex-[1]">
                <label className="ml-1 text-base font-semibold">Benefits</label>
                <input
                  type="text"
                  className="border border-none rounded-md bg-white w-full p-2 outline-none"
                  id="benifits"
                  onChange={(event) =>
                    SetData({ ...Data, benefits: event.target.value })
                  }
                  placeholder="Ex: Health Insurance, Paid Leaves"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full flex-[1]">
              <label className="ml-1 text-base font-semibold">
                Total Positions
              </label>
              <input
                type="number"
                className="border border-none rounded-md bg-white w-full p-2 outline-none"
                id="tpos"
                onChange={(event) =>
                  SetData({ ...Data, totalPositions: event.target.value })
                }
                placeholder="Ex: 10"
                min={0}
                max={50}
                step={1}
              />
            </div>
          </div>

          <div className="flex mt-8 gap-6">
            <div className="flex-[1] gap-1 flex flex-col">
              <label className="ml-1 text-base font-semibold">
                Job Description
              </label>
              <textarea
                className="h-[12rem] rounded-lg p-3 placeholder:text-md outline-none"
                id="descr"
                placeholder="The job specifies that the employee should.."
                onChange={(event) =>
                  SetData({ ...Data, jobDesc: event.target.value })
                }
              ></textarea>
            </div>
            <div className="flex-[1] gap-1 flex flex-col">
              <label className="ml-1 text-base font-semibold">
                Job Responsibilities
              </label>
              <textarea
                className="h-[12rem] rounded-lg p-3 placeholder:text-md outline-none"
                placeholder="Should work for 5 hours;Report all the days work at the end of the day.. "
                id="respons"
                onChange={(event) =>
                  SetData({ ...Data, responsibilities: event.target.value })
                }
              ></textarea>
            </div>
          </div>

          <button
            type="button"
            onClick={SubmitEventHandler}
            className="px-4 py-3 bg-gray-400 hover:bg-gray-500 hover:text-gray-50 rounded text-base mt-6"
          >
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
