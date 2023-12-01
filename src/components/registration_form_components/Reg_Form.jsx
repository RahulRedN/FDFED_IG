/* eslint-disable no-unused-vars */
import { useState } from "react";
import classes from "./Reg_Form.module.css";
import Form_Header from "./Form_Header";
import NextPrevButton from "./NextPrevButton";
import countryList from "./countryList";

const Reg_Form = () => {
  var index = 0;
  const countryMap = countryList.map((country, index) => {
    index = index + 1;
    return (
      <option key={index} value={country}>
        {country}
      </option>
    );
  });

  const [tab, setTab] = useState(0);
  const [Data, SetData] = useState({
    fname: "",
    email: "",
    mobile: "",
    address: "",
    dob: Date.now(),
    gender: "",
    nationality: "",
    marital: "",
    qualification: "",
    i_name: "",
    yoa: "",
    yoc: "",
    skills: "",
    username: "",
    password1: "",
    password2: "",
  });
  console.log(Data.mobile);

  const nextTab = (event) => {
    event.preventDefault();
    if (tab < steps.length - 1) {
      setTab(tab + 1);
    }
  };

  const prevTab = (event) => {
    event.preventDefault();
    if (tab > 0) {
      setTab(tab - 1);
    }
  };

  const isLastStep = (tab) => {
    if (tab === steps.length - 1) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    console.log(Data);
  }

  const steps = [
    // Step One
    <div className={classes.step} key={0}>
      <p className="text-md text-gray-900 leading-tight text-center mb-5">
        Create your account
      </p>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Full Name"
          name="fname"
          defaultValue={Data.fname}
          onChange={(event) => SetData({ ...Data, fname: event.target.value })}
          className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
        />
      </div>

      <div className="mb-6">
        <input
          type="email"
          placeholder="Email"
          name="email"
          defaultValue={Data.email}
          onChange={(event) => SetData({ ...Data, email: event.target.value })}
          className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
        />
      </div>

      <div className="mb-6">
        <input
          type="number"
          placeholder="Mobile Number"
          name="mobile"
          defaultValue={Data.mobile}
          onChange={(event) => SetData({ ...Data, mobile: event.target.value })}
          className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
        />
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Address"
          name="address"
          defaultValue={Data.address}
          onChange={(event) =>
            SetData({ ...Data, address: event.target.value })
          }
          className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
        />
      </div>
    </div>,

    //   Step Two
    <div className={classes.step} key={1}>
      <div className="mb-6">
        <label>DOB</label>
        <input
          type="date"
          name="dob"
          id="dob"
          defaultValue={Data.dob}
          onChange={(event) => SetData({ ...Data, dob: event.target.value })}
          className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
        />
      </div>

      <div className="mb-6">
        <label>Gender</label>
        <select
          name="gender"
          className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
          id="gender"
          defaultValue={Data.gender}
          onChange={(event) => SetData({ ...Data, gender: event.target.value })}
        >
          <option value="-1">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label>Nationality</label>
        <select
          name="Nationality"
          className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
          id="nationality"
          defaultValue={Data.nationality}
          onChange={(event) =>
            SetData({ ...Data, nationality: event.target.value })
          }
        >
          <option value="-1">-- Select --</option>
          {countryMap}
        </select>
      </div>

      <div className="mb-6">
        <label>Marital Status</label>
        <select
          name="Marital-Status"
          className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
          id="marital"
          defaultValue={Data.marital}
          onChange={(event) =>
            SetData({ ...Data, marital: event.target.value })
          }
        >
          <option value="-1">-- Select --</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="seperated">Seperated</option>
          <option value="widowed">Widowed</option>
        </select>
      </div>
    </div>,

    //   Step Three
    <div className={classes.step} key={2}>
      <p className="text-md text-black-700 leading-tight text-center  mb-5">
        Highest Qualification
      </p>

      <div className="mb-6">
        <select
          name="Qualification"
          id="Qualification"
          className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
          defaultValue={Data.qualification}
          onChange={(event) =>
            SetData({ ...Data, qualification: event.target.value })
          }
        >
          <option value="-1">Select Qualification Type</option>
          <option value="bachelors">Bachelor`s Degree</option>
          <option value="masters">Master`s Degree</option>
          <option value="doctoral">Doctoral Degree</option>
          <option value="diploma">Diploma</option>
          <option value="advanced">Advanced Diploma</option>
          <option value="graduate">Graduate Degree</option>
          <option value="national">National Diploma</option>
          <option value="postgraduate">Post Graduate Education</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Institute Name"
          name="Iname"
          defaultValue={Data.i_name}
          onChange={(event) => SetData({ ...Data, i_name: event.target.value })}
          className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
        />
      </div>

      <div className="mb-6">
        <input
          type="number"
          placeholder="Year of Admission"
          name="YOA"
          defaultValue={Data.yoa}
          onChange={(event) => SetData({ ...Data, yoa: event.target.value })}
          className="w-48 px-2 py-2 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
        />

        <input
          type="number"
          placeholder="Year of Completion"
          name="YOC"
          defaultValue={Data.yoc}
          onChange={(event) => SetData({ ...Data, yoc: event.target.value })}
          className="w-48 px-2 py-2 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
        />
      </div>

      <hr style={{ border: "1px solid black" }} />

      <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">
        Skills
      </p>

      <div className="mb-6">
        <input
          type="text"
          placeholder="eg: CSS, JS, python, etc"
          name="skills"
          defaultValue={Data.skills}
          onChange={(event) => SetData({ ...Data, skills: event.target.value })}
          className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
        />
      </div>
    </div>,

    // Step Four
    <div className={classes.step} key={3}>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Username"
          name="username"
          defaultValue={Data.username}
          onChange={(event) =>
            SetData({ ...Data, username: event.target.value })
          }
          className="w-full text-lg px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
        />
      </div>

      <div className="mb-6">
        <input
          type="password"
          placeholder="Enter Password"
          name="password1"
          defaultValue={Data.password1}
          onChange={(event) =>
            SetData({ ...Data, password1: event.target.value })
          }
          className="w-full text-lg px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
        />
      </div>

      <div className="mb-10">
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          defaultValue={Data.password2}
          onChange={(event) =>
            SetData({ ...Data, password2: event.target.value })
          }
          className="w-full text-lg px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
        />
      </div>
    </div>,
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form
      onSubmit={()=> { console.log(Data) }}
        className={
          classes.signUpForm +
          " " +
          classes.form +
          " p-12 shadow-md rounded-2xl bg-white mx-auto border-solid  border-2 border-gray-100 mb-8"
        }
        action="#"
      >
        <Form_Header tab={tab} />
        {steps[tab]}
        <NextPrevButton
          count={tab}
          len={steps.length}
          handleNext={nextTab}
          handlePrev={prevTab}
          isLast={isLastStep}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Reg_Form;
