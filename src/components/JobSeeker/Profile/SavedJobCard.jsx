const roles = ["MongoDB", "React", "TailWind", "Javascript"];

const SavedJobCard = ({ job }) => {
  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  };

  return (
    <div className="shadow-xl bg-white rounded-lg p-3 pt-4 w-[32%] min-h-[25.7vh]">
      <div className="flex items-end justify-between">
        <h5
          className={`${
            job?.location ? "bg-emerald-500" : "bg-amber-400"
          } rounded-full text-white p-1 text-xs`}
        >
          {job?.location ? job?.location : "Work From Home"}
        </h5>
        <h5 className="font-[600] text-sm">
          ₹ {Number(job?.salary).toLocaleString("en-IN")} / yr
        </h5>
      </div>

      <h1 className="mt-2 text-xl text-center font-bold tracking-wider">
        {job.position}
      </h1>
      <h1 className="text-center text-sm text-blue-500">{job.companyName}</h1>

      <div className="flex mt-5 w-[90%] mx-auto gap-3 flex-wrap">
        {job?.skills
          .split(",")
          .slice(0, Math.min(4, job?.skills.split(",").length))
          .map((role, index) => (
            <p
              key={index}
              className="text-xs p-1 bg-gray-200 text-gray-500 rounded"
            >
              {role}
            </p>
          ))}
      </div>

      <p className="mt-4 w-[90%] mx-auto text-xs">
        {truncateString(job?.jobDesc, 90)}
      </p>
      <hr className="mt-4 w-[90%] mx-auto"></hr>
      <h1 className="mt-4 text-center ">View Job</h1>
    </div>
  );
};

export default SavedJobCard;
