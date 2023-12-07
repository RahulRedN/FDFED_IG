import styles from "./PostJob.module.css";

const PostJob = () => {
  return (
    <div className={"min-h-screen p-6 bg-[#f2f0f0]"}>
      <div className="border-none h-[calc(100vh-5rem)] p-10">
        <h1 className="text-4xl mt-[-1rem] font-semibold text-center">POST JOB</h1>
        <form className="mt-8 w-full">
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label className="ml-1 rounded-lg text-base font-semibold">
                Job Position
              </label>
              <input
                type="text"
                className="border border-none rounded-md bg-white w-full p-2 outline-none"
                placeholder="Ex: Software Developer"
              />
            </div>
            <div className="flex flex-col gap-1 w-fit items-stretch">
              <label className="ml-1 text-base font-semibold">
                Joining Date
              </label>
              <input type="date" className="p-2 rounded-md" />
            </div>
            <div className="w-full flex gap-4">
              <div className="flex flex-col gap-1 w-full flex-[1]">
                <label className="ml-1 text-base font-semibold">
                  Experience
                </label>
                <input
                  type="text"
                  className="border border-none rounded-md bg-white w-full p-2 outline-none"
                  placeholder="Ex:10 years"
                />
              </div>
              <div className="flex flex-col gap-1 w-full flex-[2]">
                <label className="ml-1 text-base font-semibold">Salary</label>
                <input
                  type="text"
                  className="border border-none rounded-md bg-white w-full p-2 outline-none"
                  placeholder="Ex: 10000000"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full gap-4 mt-8">
            <div className="w-full flex gap-4 flex-[6]">
              <div className="flex flex-col gap-1 w-full flex-[1]">
                <label className="ml-1 text-base font-semibold">
                  Required Skills
                </label>
                <input
                  type="text"
                  className="border border-none rounded-md bg-white w-full p-2 outline-none"
                  placeholder="Ex: C++, Java, Python"
                />
              </div>
              <div className="flex flex-col gap-1 w-full flex-[1]">
                <label className="ml-1 text-base font-semibold">Benefits</label>
                <input
                  type="text"
                  className="border border-none rounded-md bg-white w-full p-2 outline-none"
                  placeholder="Ex: Health Insurance, Paid Leaves"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full flex-[1]">
              <label className="ml-1 text-base font-semibold">
                Total Positions
              </label>
              <input
                type="number"
                className="border border-none rounded-md bg-white w-full p-2 outline-none"
                placeholder="Ex: 10"
                min={0}
                max={50}
                step={1}
              />
            </div>
          </div>

          <div className="flex mt-8 gap-6">
            <div className="flex-[1] gap-1 flex flex-col">
              <label className="ml-1 text-base font-semibold">
                Job Description
              </label>
              <textarea className="h-[12rem] rounded-lg p-3 placeholder:text-base outline-none" placeholder="The job specifies that the employee should.."></textarea>
            </div>
            <div className="flex-[1] gap-1 flex flex-col">
              <label className="ml-1 text-base font-semibold">
                Job Responsibilities
              </label>
              <textarea className="h-[12rem] rounded-lg p-3 placeholder:text-base outline-none" placeholder="Should work for 5 hours;Report all the days work at the end of the day.. "></textarea>
            </div>
          </div>

          <button type="button" className="px-4 py-3 bg-gray-400 hover:bg-gray-500 rounded text-xl mt-6">POST</button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
