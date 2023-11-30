import { motion } from "framer-motion";
import styles from "./UpdateInfoProfile_Job.module.css";
import man from "/assets/Profile_man.jpg";
import { useState } from "react";

const UpdateInfoProfile_Job = () => {

    const [file, setFile] = useState(man);

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="flex items-center justify-center h-[90vh] max-w-[90%] mx-auto gap-10">
      <div className="flex-[1] h-[60vh] flex flex-col max-w-[100%] p-[2rem] bg-white rounded-lg shadow-2xl">
        <div className={"flex-[1] flex w-full"}>
          <img
            src={file}
            className={
              "w-[20rem] mx-auto h-[20rem] rounded-[50%] " + styles.img
            }
          />
        </div>
        <div className="mt-5 flex-[1]">
          <h1 className="text-xl text-center">Update Profile Picture</h1>
          <input type="file" onChange={handleChange} />
          <button>Remove Profile Picture</button>
        </div>
      </div>
      <div
        id="update"
        className="flex-[2] max-w-[100%] h-[60vh] p-[2rem] bg-white rounded-lg shadow-2xl"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Change User Information here
        </h2>
        <form onSubmit={SubmitHandler} className="h-full">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-end flex-wrap gap-7">
              <div className="flex flex-col min-w-[45%]">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-1 tracking-wider"
                >
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter new Name"
                  className="w-full px-3 py-2 border-[2px] placeholder:text-gray-500 border-gray-400 rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="min-w-[45%]">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-1 tracking-wider"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter new Email"
                  className="w-full px-3 py-2 border-[2px] placeholder:text-gray-500 border-gray-400 rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="min-w-[45%]">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-1 tracking-wider"
                >
                  Phone Number*
                </label>
                <input
                  type="number"
                  name="PhoneNumber"
                  placeholder="Enter new Phone Number"
                  className="w-full px-3 py-2 border-[2px] placeholder:text-gray-500 border-gray-400 rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="min-w-[45%]">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-1 tracking-wider"
                >
                  Address*
                </label>
                <input
                  type="text"
                  name="Address"
                  placeholder="Enter new Address"
                  className="w-full px-3 py-2 border-[2px] placeholder:text-gray-500 border-gray-400 rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2 tracking-wider">
                  Skills*
                </label>
                <textarea
                  className=" w-full h-[8rem] px-3 py-2 border-[2px] placeholder:text-gray-500 border-gray-400 rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your new skills"
                ></textarea>
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.8 }}
              type="submit"
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.3 }}
              className="mt-8 p-3 text-white rounded-md bg-blue-500 hover:bg-blue-600"
            >
              Update Information
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateInfoProfile_Job;
