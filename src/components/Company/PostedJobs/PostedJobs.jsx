import React from "react";
import Header from "../Dashboard/Header";
import {DeleteForeverSharp, DeleteSharp} from "@mui/icons-material";
import { SearchCheck, SearchCode } from "lucide-react";

const PostedJobs = () => {
    const count = [1,2,4,5,45,34,23,23]
  return (
    <div className="m-[20px]">
      <Header
        title="Posted Jobs"
        subtitle="Here are the jobs posted by you on our platform"
      />
        <div className="flex flex-wrap">
       { count.map(()=> (
       <div className="rounded-md m-3 bg-white shadow-lg w-[31%]">
        <div className="px-6 py-4 flex justify-between">
          <div className="w-0 flex-1">
            <div className="flex justify-between max-h-40 mt-1 text-xs text-gray-500">
              <p>Posted at</p>
              <button>
                <DeleteSharp sx={{ color: "red" , fontSize:"30px"}} />
              </button>
            </div>
            <p>
              <h1 className="text-lg font-semibold py-2 leading-6 text-gray-900">
                Position              
            </h1>
            </p>
            <div className="relative text-sm max-h-40 w-full overflow-clip">
            ₹ stipend/salary
            </div>
          </div>
        </div>
        <div className="bg-gray-50 z-20 text-sm px-4 py-4 sm:px-6">
          <div className="flex justify-between">
            <div className="flex  gap-8">
              <div className="flex gap-1">
                <SearchCode />
                <h1 className="text-sm">Applicants : 890</h1>
              </div>
              <div className="flex gap-1">
                <SearchCheck />
                <h1>Vacancies : 90</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
};

export default PostedJobs;

// <div div className="w-[78.5vw] absolute right-0">
// <div display="flex" justifyContent="space-between" alignItems="center">
//     <Header title="Posted Jobs"/>
//   </div>
//   <div className="shadow-2xl bg-white rounded-lg m-3 p-3 pt-4 w-[32%] min-h-[25vh] ">
//     <div className="flex justify-between">
//       <button className="text-white bg-red-400 rounded-md p-1">
//         remove
//       </button>
//       <h5 className="font-[600] text-sm">₹ stipend/salary</h5>
//     </div>

//     <h1 className="mt-2 text-xl text-center font-bold tracking-wider">
//       {/* {job.position} */} Position
//     </h1>

//     <p className="mt-4 w-[90%] mx-auto text-xs">
//       {/* {truncateString(job?.jobDesc, 90)} */} posted on
//     </p>
//     <hr className="mt-4 w-[90%] mx-auto"></hr>
//     <div className="flex mt-5 justify-around mx-auto gap-3">
//       <h2>No. of applicants : 89</h2>
//       <h1>Vacancies left : 20</h1>
//     </div>
//   </div>
// </div>
