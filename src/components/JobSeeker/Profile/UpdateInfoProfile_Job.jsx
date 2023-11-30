import { motion } from "framer-motion";
import styles from "./UpdateInfoProfile_Job.module.css";
import man from "/assets/Profile_man.jpg";
import upload from "/assets/Upload.gif";
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
    <div className="flex items-center justify-center h-screen max-w-[90%] mx-auto">
      <div className="flex gap-10 h-[80vh]">
        <div className="flex-[1] h-full flex flex-col justify-between max-w-[100%] p-[2rem] bg-white rounded-lg shadow-2xl">
          <h2 className=" text-2xl text-center font-semibold mb-9">
            Change Profile Picture here
          </h2>
          <div className="">
            <img
              src={file}
              className={
                "w-[15rem] mx-auto h-[15rem] rounded-[50%] object-cover"
              }
            />
          </div>

          <div className="mt-10 flex justify-center items-center">
            <div className={styles.fileinputcontainer}>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className={styles.fileinput}
                onChange={handleChange}
              />

              <label
                htmlFor="fileInput"
                className="flex items-center justify-center p-3 hover:cursor-pointer"
              >
                <img src={upload} className={styles.uploadicon} />
                <h3 className="mb-2">Upload your picture</h3>
              </label>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.3 }}
            className="w-full p-3 text-white rounded-md bg-[#25cc8b]"
          >
            Update Image
          </motion.button>
        </div>

        <div
          id="update"
          className="flex-[2] max-w-[100%] h-full p-[2rem] pb-0 bg-white rounded-lg shadow-2xl"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Change User Information here
          </h2>
          <form onSubmit={SubmitHandler} className="h-[86%]">
            <div className="flex flex-col justify-between h-full">


              <div className="flex flex-wrap gap-9">
                <div className="flex flex-col min-w-[47%]">
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

                <div className="min-w-[47%]">
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

                <div className="min-w-[47%]">
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

                <div className="min-w-[47%]">
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
                className=" p-3 text-white rounded-md bg-blue-500 hover:bg-blue-600"
              >
                Update Information
              </motion.button>


            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfoProfile_Job;
