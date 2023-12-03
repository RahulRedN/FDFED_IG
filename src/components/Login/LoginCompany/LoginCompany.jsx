import logincompany from "./Resources/logincompany.jpg";
import { useState } from "react";
import "../LoginCompany/Styles/LoginCompany.css";
import { Checkbox } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";


const LoginCompany = () => {
  const [isClicked, setIsClicked] = useState(false);


  return (
    <div className="login-company">
      <Link to="/" className="left-3 top-3 absolute z-[100] flex items-center">
      <IoMdArrowBack className="text-3xl text-white" />
        <p className="text-white">Home</p>
      </Link>
      <div className="container_full">
        <img src={logincompany} className="img_bac" />
        <div className="login-form-wrapper">
          {isClicked ? (
            <motion.div
              key={1}
              className="flex flex-col gap-10 animate123">
              <h1 className="text-center tracking-wider"> Login</h1>
              <form className="login-form w-full">
                <label htmlFor="email">Email address</label>
                <input
                  className="inputs"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />

                <label htmlFor="password"> Password</label>
                <input
                  className="inputs"
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" Enter Your password"
                  required
                />

                <div className="checkbox-div">
                  <Checkbox
                    className="text-black"
                    color={"blackAlpha.800"}
                    borderBlock={3}
                    borderColor={"blackAlpha.700"}
                  >
                    Remember me
                  </Checkbox>
                  <a href="#">Forgot password?</a>
                </div>

                <button className="btn-login uppercase">Login</button>

                <hr />

                <div className="register">
                  <p>
                    {" "}
                    Dont have an account?{" "}
                    <button
                      onClick={() => {
                        setIsClicked((prev) => !prev);
                      }}
                    >
                      Register here
                    </button>
                  </p>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
            key={2}
            className="animate321"
            >
              <h1 className="text-center"> Register</h1>
              <form className="login-form w-full">
                <label htmlFor="name">Name</label>
                <input
                  className="inputs"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Name"
                  required
                />
                <label htmlFor="email">Email address</label>
                <input
                  className="inputs"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />

                <label htmlFor="password"> Password</label>
                <input
                  className="inputs"
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" Enter Your password"
                  required
                />

                <div className="checkbox-div">
                  <Checkbox
                    className="text-black"
                    color={"blackAlpha.800"}
                    borderBlock={3}
                    borderColor={"blackAlpha.700"}
                  >
                    Remember me
                  </Checkbox>
                  <a href="#">Forgot password?</a>
                </div>

                <button className="btn-login uppercase">Register</button>

                <hr />

                <div className="register">
                  <p>
                    {" "}
                    Already a user?{" "}
                    <button
                    className="transform"
                      onClick={() => {
                        setIsClicked((prev) => !prev);
                      }}
                    >
                      Login here
                    </button>
                  </p>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginCompany;
