import { FaUserCheck } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { RiFolderReceivedLine } from "react-icons/ri";

const DataBox = ({ title,UpDown,num,No }) => {
  let Icon;
  let color;

  if (title === "JobSeekeers") {
    Icon = <FaUserCheck size={34} color="white" />;
    color ="bg-blue-400"
  } else if (title === "Companies") {
    Icon = <HiMiniBuildingOffice size={34} color="white" />;
    color ="bg-sky-400"
  } else if (title === "Incoming Requests") {
    Icon = <RiFolderReceivedLine size={34} color="white" />;
    color ="bg-lime-500"
  } else {
    Icon = <FaUserCheck size={34} color="white" />;
    color ="bg-red-300"
  }

  return (
    <div className={`${color} w-[300px] h-40 rounded-md px-5 py-7`}>
      <div className="flex justify-between">
        <h1 className="text-base text-white tracking-wide">{title}</h1>
        <div className="mr-3">{Icon}</div>
      </div>
      <p className="pt-2 text-white text-3xl">{No}</p>

      <p className="pt-4 text-white text-xs">{UpDown} by {num}%</p>
    </div>
  );
};

export default DataBox;
