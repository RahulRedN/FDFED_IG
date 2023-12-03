import "../LoginCompany/Styles/LoginCompany.css";

const CompanyRegister = () => {
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

          <label htmlFor="password">  Enter Password</label>
          <input
            className="inputs"
            type="password"
            id="password"
            name="password"
            placeholder=" Enter Your password"
            required
          />

          <label htmlFor="password">  Conform Password</label>
          <input
            className="inputs"
            type="password"
            id="password"
            name="password"
            placeholder=" Enter Your password"
            required
          />

          <div className="btn-login-div">
            <button className="btn-register">Register</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default CompanyRegister;
