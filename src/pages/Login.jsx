import { useState } from "react";

import { Input, InputGroup, InputLeftElement,InputRightElement,Button } from "@chakra-ui/react";
import Login_Image from "../static/Login_Image.jpg";
import { EmailIcon,LockIcon } from "@chakra-ui/icons";

const Login = () => {

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);


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
                <InputLeftElement pointerEvents="none" className="flex items-center justify-center">
                  <EmailIcon color="skyblue"/>
                </InputLeftElement>
                <Input type="email" placeholder="Enter your Email" height='50px'/>
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
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
