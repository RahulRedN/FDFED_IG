import { useState } from "react";

import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import Login_Image from "../static/Login_Image.jpg";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import GoogleButton from "../components/UI/GoogleButton/GoogleButton";
import { useAuth } from "../Firebase/AuthContexts";

const Login = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setShow((state)=>!state);

  const { signInWithGoogle } = useAuth();

  const googleSignInHandler = async () => {
    setIsLoading(true);
    try {
      const res = await signInWithGoogle();
      if (res.user.uid) {
        setIsLoading(false);
        alert("Logged In!");
      }
    } catch (err) {
      console.error(err);
      alert("Something happened!!!");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen bg-[#c2e6ff] flex items-center justify-center">
        <div className="flex bg-white h-[80vh] w-[75vw] rounded-2xl shadow-xl p-8">
          <img src={Login_Image} height={23} />
          <div className="flex flex-col gap-7 w-full">
            <h1 className="text-center text-3xl">Login</h1>
            <div className="flex flex-col gap-8 w-full h-full p-[5rem]">
              <h1 className="text-center text-xl">INSPIRING GO</h1>
              <InputGroup className="flex items-center justify-center">
                <InputLeftElement
                  pointerEvents="none"
                  className="flex items-center justify-center"
                >
                  <EmailIcon color="skyblue" />
                </InputLeftElement>
                <Input type="email" placeholder="Enter your Email" />
              </InputGroup>
              <InputGroup size="md">
                <InputLeftElement pointerEvents="none">
                  <LockIcon color="skyblue" />
                </InputLeftElement>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onMouseDown={handleClick} onMouseUp={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <GoogleButton
                isLoading={isLoading}
                onClickHandler={googleSignInHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
