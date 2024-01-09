// eslint-disable-next-line
import react from "react";

import FormIcon from "../assets/App Icon and Text 1formIcon.png";

import HeroIcon from "../assets/Wander Earth Icon 2.png";

import "../inputcode.css";

function CodeForm() {
  return (
    <div className="heroContainer">
      <form>
        <img src={FormIcon} alt="Form display" className="formIcon" />

        <h1 className="sentText">SENT!</h1>

        <p className="sentParagraph">
          Check your mail box for the verification code.
        </p>

        <div className="formInputs">
          <div className="userName">
            <input
              className="firstCode codeField"
              name="firstCode"
              inputMode="numeric"
              maxLength="1"
            ></input>

            <input
              className="secondCode codeField"
              name="secondCode"
              inputMode="numeric"
              maxLength="1"
            ></input>

            <input
              className="thirdCode codeField"
              name="thirdCode"
              inputMode="numeric"
              maxLength="1"
            ></input>

            <input
              className="lastCode codeField"
              name="lastCode"
              inputMode="numeric"
              maxLength="1"
            ></input>
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

export default CodeForm;
