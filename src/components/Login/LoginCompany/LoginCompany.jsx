import logincompany from "./Resources/logincompany.jpg";
import { useState } from "react";
import "../LoginCompany/Styles/LoginCompany.css";
import { Checkbox } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Firebase/AuthContexts";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../Firebase/config";
import toast from "react-hot-toast";

const LoginCompany = () => {
  const { signUp, signIn, user } = useAuth();

  const nav = useNavigate();

  if (user) {
    nav("/company");
  }

  const [isClicked, setIsClicked] = useState(true);

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    //validation

    try {
      await signIn(login.email, login.password);
    } catch (error) {
      console.error(error);
    }
  };

  const registerHandler = async () => {
    //validation

    const data = {
      email: register.email,
      name: register.name,
      role: "company",
    };

    try {
      const res = await signUp(register.email, register.password);

      if (res) {
        const collectionRef = collection(db, "users");
        await addDoc(collectionRef, { ...data, uid: res.user.uid });
        alert("Success");
      }
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        toast("Email is already in use", {
          icon: <IoIosWarning />,
          style: {
            padding: "16px",
            color: "rgb(245 ,158 ,11)",
          },
          iconTheme: {
            primary: "rgb(245 ,158 ,11)",
            secondary: "#FFFAEE",
          },
        });
      } else if (error.code == "auth/invalid-email") {
        toast("Entered email is not valid ", {
          icon: <IoIosWarning />,
          style: {
            padding: "16px",
            color: "rgb(245 ,158 ,11)",
          },
          iconTheme: {
            primary: "rgb(245 ,158 ,11)",
            secondary: "#FFFAEE",
          },
        });
      } else if (error.code == "auth/operation-not-allowed") {
        toast("Operation not allowed", {
          icon: <IoIosWarning />,
          style: {
            padding: "16px",
            color: "rgb(245 ,158 ,11)",
          },
          iconTheme: {
            primary: "rgb(245 ,158 ,11)",
            secondary: "#FFFAEE",
          },
        });
      } else if (error.code == "auth/weak-password") {
        toast("Password is too weak", {
          icon: <IoIosWarning />,
          style: {
            padding: "16px",
            color: "rgb(245 ,158 ,11)",
          },
          iconTheme: {
            primary: "rgb(245 ,158 ,11)",
            secondary: "#FFFAEE",
          },
        });
      }
      console.error(error);
    }
  };

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
            <motion.div key={1} className="flex flex-col gap-10 animate123">
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

                <button className="btn-login uppercase" onClick={loginHandler}>
                  Login
                </button>

                <hr />

                <div className="register">
                  <p>
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
            <motion.div key={2} className="animate321">
              <h1 className="text-center"> Register</h1>
              <form className="login-form w-full">
                <label htmlFor="name">Name</label>
                <input
                  className="inputs"
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) =>
                    setRegister((state) => ({ ...state, name: e.target.value }))
                  }
                  placeholder="Enter Name"
                  required
                />
                <label htmlFor="email">Email address</label>
                <input
                  className="inputs"
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) =>
                    setRegister((state) => ({
                      ...state,
                      email: e.target.value,
                    }))
                  }
                  placeholder="Enter Email"
                  required
                />

                <label htmlFor="password"> Password</label>
                <input
                  className="inputs"
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) =>
                    setRegister((state) => ({
                      ...state,
                      password: e.target.value,
                    }))
                  }
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

                <button
                  className="btn-login uppercase"
                  onClick={registerHandler}
                >
                  Register
                </button>

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
