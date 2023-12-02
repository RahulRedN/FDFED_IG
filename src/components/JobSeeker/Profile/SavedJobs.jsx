import React from "react";
import SavedJobCard from "./SavedJobCard";

const SavedJobs = () => {
  return (
    <div
      id="saved"
      className="flex justify-center items-center h-screen p-5"
    >
      <div className="h-full w-full">
        <div className="flex justify-between items-center shadow p-3 rounded">
          <h1 className="text-3xl font-[600] ">Saved Jobs</h1>
          <div className="flex">
            <p>
              Profile &gt; <span className="text-cyan-500">Saved Jobs</span>
            </p>
          </div>
        </div>
        <div className="mt-5 h-[78vh] items-center flex flex-col flex-wrap gap-y-9 gap-x-4 overflow-x-auto scrollbar-none">
          <SavedJobCard />
          <SavedJobCard />
          <SavedJobCard />
          <SavedJobCard />
          <SavedJobCard />
        </div>
        <div className="flex justify-between px-5">
          <button className="text-black p-2 rounded-md">
           &lt; Previous
          </button>
          <button className=" text-black p-2 rounded-md">
           Next &gt;
          </button>

        </div>
      </div>
    </div>
  );
};

export default SavedJobs;
