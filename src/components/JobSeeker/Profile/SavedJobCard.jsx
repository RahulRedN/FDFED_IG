const roles = ["MongoDB", "React", "TailWind", "Javascript"];

const SavedJobCard = ({ job }) => {
  const loc = true;

  return (
    <div className="shadow-xl bg-white rounded-lg p-3 pt-4 w-[32%] min-h-[25.7vh]">
      <div className="flex items-end justify-between">
        <h5
          className={`${
            loc ? "bg-emerald-500" : "bg-amber-400"
          } rounded-full text-white p-1 text-xs`}
        >
          Location
        </h5>
        <h5 className="font-[600] text-sm">₹67,000/yr</h5>
      </div>

      <h1 className="mt-2 text-xl text-center font-bold tracking-wider">
        {job.position}
      </h1>
      <h1 className="text-center text-sm text-blue-500">{job.companyName}</h1>

      <div className="flex mt-5 w-[90%] mx-auto gap-3 flex-wrap">
        {roles.map((role, index) => (
          <p
            key={index}
            className="text-xs p-1 bg-gray-200 text-gray-500 rounded"
          >
            {role}
          </p>
        ))}
      </div>

      <p className="mt-4 w-[90%] mx-auto text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        fugiat...{" "}
      </p>
      <hr className="mt-4 w-[90%] mx-auto"></hr>
      <h1 className="mt-4 text-center ">View Job</h1>
    </div>
  );
};

export default SavedJobCard;
