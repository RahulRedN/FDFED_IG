import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { AuthContexts } from "./Firebase/AuthContexts";

// import Login from "./pages/Login";
import Home from "./pages/Home";
import Student from "./pages/Student";
import JobSeeker from "./pages/JobSeeker";
import Company from "./pages/Company";
import Tutor from "./pages/Tutor";
import AboutUs from "./pages/Aboutus";
import Faqs from "./pages/Faqs";
import Login_SignUp from "./pages/Login_SignUp";
import FindJobs from "./pages/FindJobs";
import { Test } from "./test";
import Navbar from "./components/Navbar";
import Profile_JobSeeker from "./pages/Profile_JobSeeker";
import ContactUs from "./pages/ContactUs";

const Root = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login_SignUp />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/student" element={<Student />} />
      <Route path="/jobseeker" element={<JobSeeker />} />
      <Route path="/tutor" element={<Tutor />} />
      <Route path="/company" element={<Company />} />
      <Route path="/findjobs" element={<FindJobs />} />
      <Route path="/profile" element={<Profile_JobSeeker />} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/test" element={<Test />} />
    </Route>
  )
);

function App() {
  return (
    <AuthContexts>
      <ChakraProvider>
        <RouterProvider router={Router} />
      </ChakraProvider>
    </AuthContexts>
  );
}

export default App;
