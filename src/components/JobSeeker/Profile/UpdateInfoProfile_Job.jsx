import { motion } from "framer-motion";
import styles from "./UpdateInfoProfile_Job.module.css";
import man from "/assets/Profile_man.jpg";
import upload from "/assets/Upload.gif";
import { useState } from "react";
const roles = ["MongoDB", "React", "TailWind", "Javascript"];

const UpdateInfoProfile_Job = () => {
  const [file, setFile] = useState(man);
  const [edit, setEdit] = useState(false);
  const [picEdit, setPicEdit] = useState(false);
  let Pavan = "Pavan";

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div
        id="update"
        className="flex flex-col h-screen gap-y-6 max-w-[90%] mx-auto"
      >
        <div className="mt-5 flex justify-between items-center shadow p-4 rounded">
          <h1 className="text-3xl font-[600] ">Profile</h1>
          <div className="flex">
            <p>
              Profile &gt; <span className="text-cyan-500">Edit</span>
            </p>
          </div>
        </div>
        <div className="flex gap-10 h-[80vh]">
          <div className="flex-[1] h-full flex flex-col justify-between max-w-[100%] p-[2rem] bg-white rounded-lg shadow-2xl">
            <h2 className=" text-xl text-center font-semibold mb-9">
              {picEdit ? (
                <p>Change Profile Picture here</p>
              ) : (
                <p className="text-2xl">Profile Picture</p>
              )}
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

                {picEdit ? (
                  <label
                    htmlFor="fileInput"
                    className="flex items-center justify-center p-3 hover:cursor-pointer"
                  >
                    <img src={upload} className={styles.uploadicon} />
                    <h3 className="mb-2">Upload your picture</h3>
                  </label>
                ) : (
                  <div className="flex gap-3">
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      type="submit"
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeIn", duration: 0.3 }}
                      className=" p-3 w-52 text-white rounded-md bg-emerald-500 hover:bg-emerald-600"
                      onClick={() => setPicEdit((prev) => !prev)}
                    >
                      EDIT PICTURE
                    </motion.button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-[2] max-w-[100%] h-full p-[2rem] pb-0 bg-white rounded-lg shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4">
              {edit ? (
                <p>Change User Information here</p>
              ) : (
                <p>User Information</p>
              )}
            </h2>
            <form className="h-[86%]">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-wrap gap-y-4 gap-x-7">
                  <div className="flex flex-col min-w-[47%]">
                    <label
                      htmlFor="title"
                      className="block text-gray-700 text-sm font-bold mb-1 tracking-wider"
                    >
                      Name{edit ? "*" : ""}
                    </label>
                    <input
                      type="text"
                      name="name"
                      disabled={!edit}
                      value={Pavan}
                      placeholder="Enter new Name"
                      className={`w-full px-3 py-2 ${
                        edit
                          ? "border bg-gray-50 rounded-md"
                          : "bg-gray-100 rounded-lg"
                      } placeholder:text-gray-500 border-gray-600 outline-none text-gray-900  focus:outline-none focus:border-blue-400`}
                    />
                  </div>

                  <div className="min-w-[47%]">
                    <label
                      htmlFor="title"
                      className="block text-gray-700 text-sm font-bold mb-1 tracking-wider"
                    >
                      Email{edit ? "*" : ""}
                    </label>
                    <input
                      type="email"
                      name="Email"
                      disabled={!edit}
                      value="something@gmail.com"
                      placeholder="Enter new Email"
                      className={`w-full px-3 py-2 ${
                        edit
                          ? "border bg-gray-50 rounded-md"
                          : "bg-gray-100 rounded-lg"
                      } placeholder:text-gray-500 border-gray-600 outline-none text-gray-900  focus:outline-none focus:border-blue-400`}
                    />
                  </div>

                  <div className="min-w-[47%]">
                    <label
                      htmlFor="title"
                      className="block text-gray-700 text-sm font-bold mb-1 tracking-wider"
                    >
                      Phone Number{edit ? "*" : ""}
                    </label>
                    <input
                      type="number"
                      name="PhoneNumber"
                      disabled={!edit}
                      value="7337326976"
                      placeholder="Enter new Phone Number"
                      className={`w-full px-3 py-2 ${
                        edit
                          ? "border bg-gray-50 rounded-md"
                          : "bg-gray-100 rounded-lg"
                      } placeholder:text-gray-500 border-gray-600 outline-none text-gray-900  focus:outline-none focus:border-blue-400`}
                    />
                  </div>

                  <div className="min-w-[47%]">
                    <label
                      htmlFor="title"
                      className="block text-gray-700 text-sm font-bold mb-1 tracking-wider"
                    >
                      Address{edit ? "*" : ""}
                    </label>
                    <input
                      type="text"
                      name="Address"
                      disabled={!edit}
                      value={Pavan}
                      placeholder="Enter new Address"
                      className={`w-full px-3 py-2 ${
                        edit
                          ? "border bg-gray-50 rounded-md"
                          : "bg-gray-100 rounded-lg"
                      } placeholder:text-gray-500 border-gray-600 outline-none text-gray-900  focus:outline-none focus:border-blue-400`}
                    />
                  </div>
                  <div className={`${!edit ? "min-w-[47%]" : "w-full"}`}>
                    {!edit ? (
                      <div className="flex flex-col">
                        <label
                          htmlFor="title"
                          className="block text-gray-700 text-sm font-bold mb-1 tracking-wider"
                        >
                          Skills{edit ? "*" : ""}
                        </label>
                        <div className="mt-2 flex gap-5">
                          {roles.map((role, index) => {
                            return (
                              <p
                                key={index}
                                className="text-sm px-2 py-2 bg-gray-100 text-gray-800 rounded"
                              >
                                {role}
                              </p>
                            );
                          })}
                        </div>

                        <label
                          htmlFor="title"
                          className="mt-4 block text-gray-700 text-sm font-bold mb-1 tracking-wider"
                        >
                          Education{edit ? "*" : ""}
                        </label>
                        <input
                          type="text"
                          name="Education"
                          disabled={!edit}
                          value={"SriChaitanya"}
                          className={`w-full mt-2 px-3 py-2 ${
                            edit
                              ? "border bg-gray-50 rounded-md"
                              : "bg-gray-100 rounded-lg"
                          } placeholder:text-gray-500 border-gray-600 outline-none text-gray-900  focus:outline-none focus:border-blue-400`}
                        />

                        <div className="flex justify-between gap-x-9">
                          <div className="w-fit">
                            <label
                              htmlFor="title"
                              className="mt-4 block text-gray-700 text-sm font-bold mb-1 tracking-wider"
                            >
                              Date Of Birth{edit ? "*" : ""}
                            </label>
                            <input
                              type="text"
                              name="DateOfBirth"
                              disabled={!edit}
                              value={"21/12/2003"}
                              className={`w-fit mt-2 px-3 py-2 bg-gray-100 rounded-lg
                               placeholder:text-gray-500  outline-none text-gray-900  focus:outline-none focus:border-blue-400`}
                            />
                          </div>

                          <div className="w-fit">
                            <label
                              htmlFor="title"
                              className="mt-4 block text-gray-700 text-sm font-bold mb-1 tracking-wider"
                            >
                              Gender{edit ? "*" : ""}
                            </label>
                            <input
                              type="text"
                              name="Gender"
                              disabled={!edit}
                              value={"Male"}
                              className={`w-fit mt-2 px-3 py-2 ${
                                edit
                                  ? "border bg-gray-50 rounded-md"
                                  : "bg-gray-100 rounded-lg"
                              } placeholder:text-gray-500 border-gray-600 outline-none text-gray-900  focus:outline-none focus:border-blue-400`}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2 tracking-wider">
                          Skills{edit ? "*" : ""}
                        </label>
                        <textarea
                          name="skills"
                          value={"Skills, Skills, Skills"}
                          disabled={!edit}
                          className={`w-full px-3 py-2 ${
                            edit
                              ? "border bg-gray-50 rounded-md"
                              : "bg-gray-200 rounded-lg"
                          } placeholder:text-gray-500 border-gray-600 outline-none text-gray-900  focus:outline-none focus:border-blue-400 h-[10rem] tracking-wider`}
                          placeholder="Enter your new skills"
                        ></textarea>
                      </div>
                    )}
                  </div>
                </div>
                {edit ? (
                  <div className="flex gap-3">
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      type="button"
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeIn", duration: 0.3 }}
                      className=" p-3 w-36 text-white rounded-md bg-blue-500 hover:bg-blue-600"
                    >
                      Confirm
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      type="button"
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeIn", duration: 0.3 }}
                      className=" p-3 w-36 text-white rounded-md bg-red-500 hover:bg-red-600"
                      onClick={() => setEdit((prev) => !prev)}
                    >
                      Cancel
                    </motion.button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      type="button"
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeIn", duration: 0.3 }}
                      className=" p-3 w-48 text-white rounded-md bg-blue-500 hover:bg-blue-600"
                      onClick={() => setEdit((prev) => !prev)}
                    >
                      EDIT PROFILE
                    </motion.button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateInfoProfile_Job;
