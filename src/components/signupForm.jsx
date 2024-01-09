// eslint-disable-next-line
import react from "react";

import FormIcon from "../assets/App Icon and Text 1formIcon.png";

import HeroIcon from "../assets/Wander Earth Icon 2.png";

import "../form.css";

function SignupForm() {
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

          <div className="email">
            <p>Email Address</p>
            <input
              placeholder="Email Address"
              className="email formField"
              name="email"
              type="email"
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
          </div>

          <div className="c-Password">
            <p>Confirm Password</p>
            <input
              placeholder="Confirm Password"
              className="Password2 formField"
              name="Password2"
              type="password"
            ></input>
          </div>
        </div>

        <button className="signupButton">Signup</button>
        <p className="otherOption">
          Do you have an account already?
          <span className="loginText" name="login">
            LOGIN
          </span>
        </p>
      </form>

      <div className="heroImage">
        <img src={HeroIcon} alt="Hero Image" className="heroIcon" />
      </div>
    </div>
  );
}

export default SignupForm;
