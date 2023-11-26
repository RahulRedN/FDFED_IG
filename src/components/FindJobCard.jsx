import {
  Building2,
  TrendingUp,
  MapPin,
  Home,
  CalendarRange,
  Coins,
  Hourglass,
  History,
  CalendarSearch,
  MailSearch,
  Heart,
} from "lucide-react";
import { useState } from "react";
import Modal from "react-modal";
import { CgProfile } from "react-icons/cg";

const FindJobCard = () => {
  const isLocation = true;
  const Posted = false;
  const isJustNow = true;
  const [isfav, setIsfav] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)", // Darker background shade
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      borderRadius: "10px",
      outline: "none",
      padding: "2rem",
      width: "80vw",
      height: "80vh",
      overflowY: "scroll",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Optional shadow for the modal
      scrollbarWidth: "thin", // For Firefox
      scrollbarColor: "#4a4a4a #e5e5e5", // For Firefox
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="shadow-xl w-[45vw] h-fit p-4 border border-gray-100 bg-white">
        <div className="flex items-center justify-between">
          <div className="max-w-fit border border-gray-300 rounded-md flex items-center gap-2 p-1">
            <TrendingUp
              strokeWidth={2.3}
              size={16}
              color={`${isJustNow ? "#10b981" : "#60a5fa"}`}
            />
            <p className="text-sm tracking-wide">
              {isJustNow ? "Actively Hiring" : "Hiring"}
            </p>
          </div>
          <Heart
            className={`hover:cursor-pointer ${
              isfav ? "fill-red-500 text-red-500" : ""
            } `}
            onClick={() => {
              setIsfav(!isfav);
            }}
          />
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex flex-col gap-1">
            <h2 className="tracking-wide text-xl font-bold">Position</h2>
            <h6 className="text-sm text-gray-400 font-bold tracking-wide">
              Company name
            </h6>
          </div>
          <Building2 size={30} />
        </div>

        <div className="mt-5">
          {!isLocation ? (
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <p className="text-sm">Location</p>
            </div>
          ) : (
            <div className="flex gap-1">
              <Home size={16} />
              <p className="text-sm tracking-wide">Work from home</p>
            </div>
          )}

          <div className="flex flex-wrap mt-5 gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                <CalendarRange size={17} color="#3b82f6" />
                <span className="text-sm font-normal text-zinc-500 tracking-wide">
                  Joining Date
                </span>
              </div>
              <h1 className="text-sm font-thin">15/11/2024</h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                <Coins size={17} color="gold" />
                <span className="text-sm text-zinc-500 tracking-wider">
                  Salary
                </span>
              </div>
              <h1 className="text-sm font-thin tracking-wide"> ₹ 5000000</h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                <Hourglass size={16} color="#000000" />
                <span className="text-sm text-zinc-500 tracking-wider">
                  Experience
                </span>
              </div>
              <h1 className="text-sm font-thin">5 years</h1>
            </div>
          </div>

          <div className="flex mt-5 gap-3 items-stretch flex-wrap">
            {!Posted ? (
              <div className="max-w-fit rounded flex items-center gap-1 p-1 bg-green-100">
                <History strokeWidth={2} size={16} color="#4ade80" />
                <p className="text-sm text-green-400">2 days ago</p>
              </div>
            ) : (
              <div className="max-w-fit rounded flex items-center gap-1 p-1 bg-sky-100">
                <History strokeWidth={2} size={16} color="#60a5fa" />
                <p className="text-sm text-blue-400">2 days ago</p>
              </div>
            )}
            <p className="text-sm p-1 bg-gray-200 text-gray-500 rounded">
              Role
            </p>
            <p className="text-sm p-1 bg-gray-200 text-gray-500 rounded">
              React
            </p>
            <p className="text-sm p-1 bg-gray-200 text-gray-500 rounded">CSS</p>
            <p className="text-sm p-1 bg-gray-200 text-gray-500 rounded">
              Java
            </p>
          </div>

          <hr className="my-5 text-black" />
          <div className="flex justify-end">
            <button
              onClick={openModal}
              className="bg-[#583fc7] hover:bg-[#7355F7] text-white tracking-wider py-2 px-4 rounded focus:outline-none focus:shadow-outline
          "
            >
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 className="font-bold text-4xl text-center">Company Name</h1>
        <div className="mt-5 p-3 border w-full rounded shadow">
          <h1 className="tracking-wide text-xl font-[600]">
            About the Company
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            bibendum laoreet vulputate. Pellentesque sed libero a dui imperdiet
            imperdiet. Suspendisse potenti. Vestibulum dignissim sapien mi. Sed
            ultrices bibendum augue. Nunc luctus sit amet felis a egestas. Nunc
            imperdiet elit ex, ut rhoncus metus elementum vitae. Phasellus
            aliquam fringilla orci non tristique. Maecenas quis dolor eget leo
            accumsan ultricies. Aenean quis bibendum diam. Fusce facilisis quam
            et ipsum vulputate bibendum. Curabitur arcu nunc, sodales ut varius
            eget, efficitur vel ligula. Sed placerat augue vitae purus ultrices
            efficitur.
          </p>
        </div>

        <div className="w-fit mt-6 p-4 border flex flex-col gap-3 rounded shadow">
          <h1 className="font-[600]">Activity on InspiringGo</h1>
          <div className="flex gap-5">
            <div className="flex gap-1 items-center">
              <CalendarSearch size={19} />
              <h2>Hiring since September 2016</h2>
            </div>
            <div className="flex gap-1 items-center">
              <MailSearch size={19} />
              <h2>10 oppurtunities posted</h2>
            </div>
            <div className="flex gap-1 items-center">
              <CgProfile size={21} />
              <h2>25 candidates hired</h2>
            </div>
          </div>
        </div>
        <h1 className="mt-5 text-lg font-[600]">About the job</h1>
        <p className="mt-2 text-[500]">
          Vestibulum dignissim sapien mi. Sed ultrices bibendum augue. Nunc
          luctus sit amet felis a egestas. Nunc imperdiet elit ex, ut rhoncus
          metus elementum vitae. Phasellus aliquam fringilla orci non tristique.
        </p>

        <h3 className="mt-4 font-[600]">Responsibilities:</h3>
        <ul className="ml-5" style={{ listStyleType: "disc" }}>
          <br></br>
          <li>
            Vestibulum dignissim sapien mi. Sed ultrices bibendum augue.
            Nuncluctus sit amet felis a egestas. rhoncusmetus vitae Phasellus
            aliquam fringilla orci nontristique.
          </li>
          <li>
            Vestibulum dignissim sapien mi. Sed ultrices bibendum augue.
            Nuncluctus sit amet felis a egestas. rhoncusmetus vitae Phasellus
            aliquam fringilla orci nontristique.
          </li>
          <li>
            Vestibulum dignissim sapien mi. Sed ultrices bibendum augue.
            Nuncluctus sit amet felis a egestas. rhoncusmetus vitae Phasellus
            aliquam fringilla orci nontristique.
          </li>
        </ul>

        <h1 className="mt-8 text-lg font-[600]">Skills Required</h1>
        <div className="flex mt-3 gap-3 items-stretch flex-wrap">
          <p className="text-sm p-1 bg-gray-200 text-gray-500 rounded">Role</p>
          <p className="text-sm p-1 bg-gray-200 text-gray-500 rounded">React</p>
          <p className="text-sm p-1 bg-gray-200 text-gray-500 rounded">CSS</p>
          <p className="text-sm p-1 bg-gray-200 text-gray-500 rounded">Java</p>
        </div>

        <h1 className="mt-8 text-lg font-[600]">Salary</h1>
        <h3 className="mt-2 text-md font-[400] tracking-wide">
          Annual CTC: 500000/year
        </h3>

        <h1 className="mt-8 text-lg font-[600]">Benefits</h1>
        <div className="flex mt-3 gap-3 items-stretch flex-wrap">
          <p className="text-sm p-1 bg-gray-200 text-gray-500 rounded">
            Health
          </p>
          <p className="text-sm p-1 bg-gray-200 text-gray-500 rounded">
            Stocks
          </p>
          <p className="text-sm p-1 bg-gray-200 text-gray-500 rounded">Wifi</p>
          <p className="text-sm p-1 bg-gray-200 text-gray-500 rounded">
            Free snacks & beverages
          </p>
        </div>

        <h1 className="mt-5 text-lg font-[600]">Number of available slots</h1>
        <h3 className="mt-2 text-md font-[400] tracking-wide">10</h3>

        <button
          onClick={() => {}}
          className="mt-5 text-center m-auto bg-teal-400 hover:bg-teal-500 text-white tracking-wider py-2 px-4 rounded focus:outline-none focus:shadow-outline
          "
        >
          Apply now
        </button>
      </Modal>
    </>
  );
};

export default FindJobCard;
