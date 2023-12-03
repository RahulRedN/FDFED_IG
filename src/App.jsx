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
import HomePage from "./components/homepage_compos/HomePage";
import ContactUs_Home from "./components/homepage_compos/ContactUs_Home/ContactUs_Home";

import JobSeeker from "./pages/JobSeeker";
import ContactUs from "./components/JobSeeker/ContactUs/ContactUs_jobseeker";
import JLanding from "./components/JobSeeker/Home/JobLanding";

import Company from "./pages/Company";
import AboutUs from "./pages/Aboutus";
import Faqs from "./pages/Faqs";
import Login_SignUp from "./pages/Login_SignUp";
import FindJobs from "./components/JobSeeker/FindJob/FindJobs";
import Profile_Job from "./components/JobSeeker/Profile/Profile_Job";
import LoginCompany from "./components/Login/LoginCompany/LoginCompany";
import CompanyRegister from "./components/Login/LoginCompany/CompanyRegister";

const Root = () => {
  return <Outlet />;
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs_Home />} />
      </Route>

      <Route path="/login" element={<Login_SignUp />} />
      <Route path="/logincompany" element={<LoginCompany />} />
      <Route path="/companyregister" element={<CompanyRegister />} />



      <Route path="/jobseeker" element={<JobSeeker />}>
        <Route index element={<JLanding />} />
        <Route path="findjobs" element={<FindJobs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="profile" element={<Profile_Job />} />
      </Route>

      <Route path="/company" element={<Company />} />
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
