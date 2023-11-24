import { useRef } from "react";
import FindJobCard from "../components/FindJobCard";
import Filters from "../components/Filters";

const FindJobs = () => {
  const jobs = useRef(null);

  return (
    <>
      <div className="h-[30vh] bg-gray-300 w-full flex items-center">
        <h1 className="text-6xl tracking-wide font-[600] ml-[15rem]">
          FIND JOBS
        </h1>
      </div>
      <div className="ml-[15rem] mt-5 flex gap-10 relative">
        <Filters />
        <div ref={jobs} className="m-1 flex-[9] flex flex-wrap gap-2">
          <FindJobCard />
        </div>
      </div>
    </>
  );
};

export default FindJobs;
