import React from "react";

const PostedJobs = () => {
  return (
    <div div className="w-[78.5vw] absolute right-0">
      <div className="shadow-2xl bg-white rounded-lg m-3 p-3 pt-4 w-[32%] min-h-[25vh] ">
        <div className="flex justify-between">
          <button className="text-white bg-red-400 rounded-md p-1">
            remove
          </button>
          <h5 className="font-[600] text-sm">₹ stipend/salary</h5>
        </div>

        <h1 className="mt-2 text-xl text-center font-bold tracking-wider">
          {/* {job.position} */} Position
        </h1>

        <p className="mt-4 w-[90%] mx-auto text-xs">
          {/* {truncateString(job?.jobDesc, 90)} */} posted on
        </p>
        <hr className="mt-4 w-[90%] mx-auto"></hr>
        <div className="flex mt-5 justify-around mx-auto gap-3">
          <h2>No. of applicants : 89</h2>
          <h1>Vacancies left : 20</h1>
        </div>
      </div>
    </div>
  );
};

export default PostedJobs;
