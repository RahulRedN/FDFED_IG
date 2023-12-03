import "../LoginCompany/Styles/LoginCompany.css";
import { Link } from 'react-router-dom';

import { Checkbox,  } from '@chakra-ui/react'
// Import your CSS file

const LoginCompany = () => {
  return (
    <div className="login-company">
      <div className="login-form-wrapper">
        <h1> Company Login</h1>
        <form className="login-form">
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
          <Checkbox defaultChecked>Remember me</Checkbox>
            <a href="#">Forgot password?</a>
          </div>

          <div className="btn-login-div">
            <button className="btn-login">Login</button>
          </div>

          <hr />

<div className="register">
          <p> Dont have an account? <Link to="/companyregister">Register here</Link></p>

          </div>

        </form>
        
      </div>
    </div>
  );
};

export default LoginCompany;
