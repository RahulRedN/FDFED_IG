import { useState } from "react";
import SavedJobCard from "./SavedJobCard";
import { useSelector } from "react-redux";
const SavedJobs = () => {
  const user = useSelector((state) => state.jobseeker);

  const [state, setState] = useState({ fav: user?.data.fav, jobs: user?.jobs });

  const scrollLeft = () => {
    var scrollContainer = document.getElementById("scrollContainer");
    scrollContainer.scrollLeft -= 400;
  };

  const scrollRight = () => {
    var scrollContainer = document.getElementById("scrollContainer");
    scrollContainer.scrollLeft += 400;
  };

  return (
    <div id="saved" className="flex justify-center items-center h-screen p-3">
      <div className="h-full w-full border p-1">
        <div className="flex justify-between items-center shadow p-3 rounded">
          <h1 className="text-3xl font-[600] ">Saved Jobs</h1>
          <div className="flex">
            <p>
              Profile &gt; <span className="text-cyan-500">Saved Jobs</span>
            </p>
          </div>
        </div>
        <div className="mt-5 h-[78vh] items-center flex flex-col flex-wrap gap-y-9 gap-x-4 overflow-x-auto scrollbar-none">
          {state.jobs
            ?.filter((job) => state.fav[job.id])
            .map((jobCard, idx) => (
              <SavedJobCard key={idx} job={jobCard} />
            ))}
            {(state.jobs
            ?.filter((job) => state.fav[job.id])) ? "No jobs found!" : ""}
        </div>
        <div className="flex justify-between px-52">
          <div className="bg-gray-300 rounded hover:bg-gray-400">
            <button className="text-black p-2 rounded-md hover:text-white" onClick={scrollLeft}>
              &lt; Previous
            </button>
          </div>
          <div className="bg-gray-300 rounded hover:bg-gray-400">
            <button className="text-black p-2 rounded-md hover:text-white" onClick={scrollRight}>
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedJobs;
