import { useEffect, useState } from "react";
import FindJobCard from "./FindJobCard";
import ImageHeader from "../ImageHeader";
import Filters from "./Filters";

import { setFav } from "../../../redux/jobseekerReducer";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/config";

const FindJobs = () => {
  const data = useSelector((state) => state.jobseeker.data);
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();

  const setFavHandler = async (favJobs) => {
    try {
      const tempData = { ...data, fav: favJobs };
      const docRef = doc(collection(db, "users"), data.id);
      await updateDoc(docRef, tempData);
    } catch (error) {
      console.log(error);
    }
    dispatch(setFav(favJobs));
  };

  return (
    <div className="bg-gray-50 pb-5">
      <ImageHeader src={"FindJobs"} />
      <div className="ml-[15rem] mt-5 flex gap-10 relative">
        <Filters />
        <div className="m-1 flex-[11] flex flex-wrap gap-2">
          {jobs?.map((job, idx) => (
            <FindJobCard
              key={idx}
              job={job}
              fav={data?.fav}
              setFavHandler={setFavHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
