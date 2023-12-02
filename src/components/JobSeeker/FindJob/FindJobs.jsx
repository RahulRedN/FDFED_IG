import { useRef } from "react";
import FindJobCard from "./FindJobCard";
import ImageHeader from "../ImageHeader";
import Filters from "./Filters";
const FindJobs = () => {
  const jobs = useRef(null);

  return (
    <div className="bg-gray-50 pb-5">
      <ImageHeader src={"FindJobs"} />
      <div className="ml-[15rem] mt-5 flex gap-10 relative">
        <Filters />
        <div ref={jobs} className="m-1 flex-[11] flex flex-wrap gap-2">
          <FindJobCard />
          <FindJobCard />
          <FindJobCard />
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
