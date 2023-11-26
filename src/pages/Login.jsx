import { useState } from "react";

import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Switch,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import GoogleButton from "../components/UI/GoogleButton/GoogleButton";
import { useAuth } from "../Firebase/AuthContexts";

const Login = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("1");

  const handleClick = () => setShow((state) => !state);

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

  /*bg color #76c7ff */

  return (
    <>
      <div className="h-screen bg-[#76c7ff] flex items-center justify-center">
        <div className="flex bg-white h-[75vh] w-[67vw] rounded-2xl shadow-xl p-8">
          {/* <img src={Login_Image} height="30rem" /> */}
          <div className="flex flex-col w-full">
            <h1 className="text-center text-3xl">Login</h1>
            <div className="flex flex-col gap-7 w-full h-full p-[5rem]">
              <h1 className="text-center text-xl">INSPIRING GO</h1>
              <InputGroup className="flex items-center justify-center">
                <InputLeftElement pointerEvents="none" className="flex justify-center items-center px-5">
                  <EmailIcon color="#3182ce" className="flex text-lg " />
                </InputLeftElement>
                <Input
                  type="email"
                  variant="filled"
                  placeholder="Enter your Email"
                  _placeholder={{ opacity: 1, color: "gray.700" }}
                />
              </InputGroup>
              <InputGroup size="md">
                <InputLeftElement pointerEvents="none" className="flex justify-center items-center px-5">
                  <LockIcon color="#3182ce" className="text-xl" />
                </InputLeftElement>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  variant="filled"
                  placeholder="Enter password"
                  _placeholder={{ opacity: 1, color: "gray.900" }}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    height="1.75rem"
                    size="sm"
                    bg="gray.500"
                    fontWeight="semibold"
                    _hover={{bg:'gray.400'}}
                    color="white"
                    onMouseDown={handleClick}
                    onMouseUp={handleClick}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <RadioGroup
                onChange={setValue}
                value={value}
                className="flex gap-7"
              >
                <Radio value="1">JobSeeker</Radio>
                <Radio value="2">Student</Radio>
              </RadioGroup>
              <FormControl display="flex" alignItems="center" gap="0.3rem">
                <Switch id="email-alerts" />
                <FormLabel htmlFor="email-alerts" mb="0">
                  Remember Me
                </FormLabel>
              </FormControl>
              <Button colorScheme="gray.500" height='3rem'>SIGN IN</Button>
              <h1 className="text-center text-gray-950 text-lg">OR</h1>
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
