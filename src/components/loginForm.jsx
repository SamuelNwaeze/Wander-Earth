// eslint-disable-next-line
import react from "react";

import FormIcon from "../assets/App Icon and Text 1formIcon.png";

import HeroIcon from "../assets/Wander Earth Icon 2.png";

import "../login.css";

function LoginForm() {
  return (
    <div className="heroContainer">
      <form>
        <img src={FormIcon} alt="Form display" className="formIcon" />

        <div className="formInputs">
          <div className="userName">
            <p>UserName</p>
            <input
              placeholder="UserName"
              className="UserName formField"
              name="username"
              type="text"
            ></input>
          </div>

          <div className="Password">
            <p>Password</p>
            <input
              placeholder="Password"
              className="Password1 formField"
              name="Password"
              type="password"
            ></input>
            <p className="forgotPassword">FORGOT PASSWORD?</p>
          </div>
        </div>

        <button className="loginButton">Login</button>
        <p className="otherOption">
          A new User?
          <span className="signupText" name="signup">
            SIGNUP
          </span>
        </p>
      </form>

      <div className="heroImage">
        <img src={HeroIcon} alt="Hero Image" className="heroIcon" />
      </div>
    </div>
  );
}

export default LoginForm;
