import { useRef } from "react";
import FindJobCard from '../components/JobSeeker/FindJobCard';
import ImageHeader from "../components/JobSeeker/ImageHeader";
import Filters from "../components/JobSeeker/Filters";
const FindJobs = () => {
  const jobs = useRef(null);
  
  return (
    <div className="bg-zinc-100 pb-5">
      <ImageHeader src={"FindJobs"} />
      <div className="ml-[15rem] mt-5 flex gap-10 relative">
        <Filters />
        <div ref={jobs} className="m-1 flex-[9] flex flex-wrap gap-2">
          <FindJobCard />
          <FindJobCard />
          <FindJobCard />
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
