import { ChakraProvider } from "@chakra-ui/react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { AuthContexts } from "./Firebase/AuthContexts";

// import Login from "./pages/Login";
import Home from "./pages/Home";
import HomePage from "./components/homepage_compos/HomePage";
import ContactUs_Home from "./components/homepage_compos/ContactUs_Home/ContactUs_Home";
import AboutUs from "./components/homepage_compos/Aboutus";
import Faqs from "./components/homepage_compos/Faqs";

import JobSeeker from "./pages/JobSeeker";
import ContactUs from "./components/JobSeeker/ContactUs/ContactUs_jobseeker";
import JLanding from "./components/JobSeeker/Home/JobLanding";

import Admin_Login from "./components/admin_login/Admin_Login";

import Company from "./pages/Company";
import Login_SignUp from "./pages/Login_SignUp";
import FindJobs from "./components/JobSeeker/FindJob/FindJobs";
import Profile_Job from "./components/JobSeeker/Profile/Profile_Job";
import Dashboard from "./components/Company/Dashboard/Dashboard";
// import Navbar from "./components/company_components/Navbar";
// import { Dashboard } from "@mui/icons-material";
// import Sidebar from "./components/company_components/Sidebar";
import Employees from "./components/Company/Employees/Employees";
import PendingList from "./components/Company/PendingList/PendingList";
import PostJob from "./components/Company/PostJob/PostJob";
import LoginCompany from "./components/Login/LoginCompany/LoginCompany";

import PostedJobs from "./components/Company/PostedJobs/PostedJobs";
import QuesCards from "./components/homepage_compos/News/QuesCards";

import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Root = () => {
  return <Outlet />;
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs_Home />} />
        <Route path="news" element={<QuesCards />} />
      </Route>

      <Route path="/login" element={<Login_SignUp />} />
      <Route path="/logincompany" element={<LoginCompany />} />

      <Route
        path="/jobseeker"
        element={
          <PrivateRoute role={"jobseeker"}>
            <JobSeeker />
          </PrivateRoute>
        }
      >
        <Route index element={<JLanding />} />
        <Route path="findjobs" element={<FindJobs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="profile" element={<Profile_Job />} />
      </Route>
      {/* 
      <Route path="/company" element={<Sidebar />} />
        <Route path="navbar" element={<Navbar />} /> */}
      <Route
        path="/company"
        element={
          <PrivateRoute role={"company"}>
            <Company />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="employeelist" element={<Employees />} />
        <Route path="pendinglist" element={<PendingList />} />
        <Route path="postjob" element={<PostJob />} />
        <Route path="postedjobs" element={<PostedJobs />} />
      </Route>
      <Route path='/test' element={<Admin_Login />}/>
    </Route>
  )
);

function App() {
  return (
    <AuthContexts>
      <ChakraProvider>
        <Toaster />
        <RouterProvider router={Router} />
      </ChakraProvider>
    </AuthContexts>
  );
}

export default App;
