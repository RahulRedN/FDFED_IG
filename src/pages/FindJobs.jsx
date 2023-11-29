import { useRef } from "react";
import FindJobCard from "../components/FindJobCard";
import Filters from "../components/Filters";
import ImageHeader from "../components/JobSeeker/ImageHeader";

const FindJobs = () => {
  const jobs = useRef(null);
  
  return (
    <div className="bg-gray-50 pb-5">
      <ImageHeader src={"FindJobs"} />
      <div className="ml-[15rem] mt-5 flex gap-10 relative">
        <Filters />
        <div ref={jobs} className="m-1 flex-[9] flex flex-wrap gap-2">
          <FindJobCard />
          <FindJobCard />
          <FindJobCard />
          <FindJobCard />
          <FindJobCard />
          <FindJobCard />
          <FindJobCard />
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
