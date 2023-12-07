import { useState } from "react";
import toast from 'react-hot-toast'

const PostJob = () => {


  const [Data, SetData] = useState({
    Jpos: "",
    Jdate: "",
    exp: "",
    sal: "",
    skills: "",
    benifits: "",
    tpos: "",
    descr: "",
    respons: "",
  });


  const SubmitEventHandler = () => {

    const alphaRegex = /^[a-zA-Z\s]+$/;
    const parsedDate = new Date(Data.Jdate);
    const today = new Date();


    if(Data.Jpos.trim() === ""){
      toast.error("Job Position cannot be empty",{className:"text-red-400"});
      return;
    }
    if(Data.Jdate.trim() === ""){
      toast.error("Joining Date cannot be empty",{className:"text-red-400"});
      return;
    }
    if(parsedDate < today){
      toast.error("Joining Date cannot be in the past",{className:"text-red-400"});
      return;
    }

    if((!alphaRegex.test(Data.Jpos.trim()))){
      toast.error("Job Position should contain only alphabets",{className:"text-red-400"});
      return;
    }

    if(Data.exp.trim() === ""){
      toast.error("Experience cannot be empty",{className:"text-red-400"});
      return;
    }

    if(Data.sal.trim() === ""){
      toast.error("Salary cannot be empty",{className:"text-red-400"});
      return;
    }

    if(Data.skills.trim() === ""){
      toast.error("Skills cannot be empty",{className:"text-red-400"});
      return;
    }

    if(Data.benifits.trim() === ""){
      toast.error("Benifits cannot be empty",{className:"text-red-400"});
      return;
    }

    if(Data.tpos.trim() === ""){
      toast.error("Total Positions cannot be empty",{className:"text-red-400"});
      return;
    }

    if(Data.descr.trim() === ""){
      toast.error("Job Description cannot be empty",{className:"text-red-400"});
      return;
    }

    if(Data.respons.trim() === ""){
      toast.error("Job Responsibilities cannot be empty",{className:"text-red-400"});
      return;
    }




  }


  return (
    <div className={"min-h-screen p-6 bg-indigo-100"}>
      <div className="border-none h-[calc(100vh-5rem)] p-10">
        <h1 className="text-4xl mt-[-1rem] font-semibold text-center">POST JOB</h1>
        <form className={"mt-10 w-full"}>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label className="ml-1 rounded-lg text-base font-semibold">
                Job Position
              </label>
              <input
                type="text"
                id="Jpos"
                onChange={(event) => SetData({ ...Data, Jpos: event.target.value })}
                className={"border border-none rounded-md bg-white w-full p-2 outline-none "}
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
                  id="exp"
                  onChange={(event) => SetData({ ...Data, exp: event.target.value })}
                  className="border border-none rounded-md bg-white w-full p-2 outline-none"
                  placeholder="Ex:10 years"
                />
              </div>
              <div className="flex flex-col gap-1 w-full flex-[2]">
                <label className="ml-1 text-base font-semibold">Salary</label>
                <input
                  type="text"
                  id="sal"
                  onChange={(event) => SetData({ ...Data, sal: event.target.value })}
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
                  id="skills"
                  onChange={(event) => SetData({ ...Data, skills: event.target.value })}
                  className="border border-none rounded-md bg-white w-full p-2 outline-none"
                  placeholder="Ex: C++, Java, Python"
                />
              </div>
              <div className="flex flex-col gap-1 w-full flex-[1]">
                <label className="ml-1 text-base font-semibold">Benefits</label>
                <input
                  type="text"
                  className="border border-none rounded-md bg-white w-full p-2 outline-none"
                  id="benifits"
                  onChange={(event) => SetData({ ...Data, benifits: event.target.value })}
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
                id="tpos"
                onChange={(event) => SetData({ ...Data, tpos: event.target.value })}
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
              <textarea className="h-[12rem] rounded-lg p-3 placeholder:text-md outline-none" 
              id="descr"
              placeholder="The job specifies that the employee should.."
              onChange={(event) => SetData({ ...Data, descr: event.target.value })}
              ></textarea>
            </div>
            <div className="flex-[1] gap-1 flex flex-col">
              <label className="ml-1 text-base font-semibold">
                Job Responsibilities
              </label>
              <textarea className="h-[12rem] rounded-lg p-3 placeholder:text-md outline-none" placeholder="Should work for 5 hours;Report all the days work at the end of the day.. "
              id="respons"
              onChange={(event) => SetData({ ...Data, respons: event.target.value })}
              ></textarea>
            </div>
          </div>

          <button type="button" 
          onClick={SubmitEventHandler}
          className="px-4 py-3 bg-gray-400 hover:bg-gray-500 hover:text-gray-50 rounded text-base mt-6">POST</button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
