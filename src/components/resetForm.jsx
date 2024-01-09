// eslint-disable-next-line
import react from "react";

import FormIcon from "../assets/App Icon and Text 1formIcon.png";

import HeroIcon from "../assets/Wander Earth Icon 2.png";

import "../login.css";

function ResetForm() {
  return (
    <div className="heroContainer">
      <form>
        <img src={FormIcon} alt="Form display" className="formIcon" />

        <div className="formInputs">
          <div className="email">
            <p>Email Address</p>
            <input
              placeholder="email"
              className="email formField"
              name="email"
              type="text"
            ></input>
          </div>
        </div>

        <button className="codeButton">Send Code</button>
        <p className="otherOption">
          Didn&apos;t get a code?
          <span className="resendText" name="resend">
            RESEND
          </span>
        </p>
      </form>

      <div className="heroImage">
        <img src={HeroIcon} alt="Hero Image" className="heroIcon" />
      </div>
    </div>
  );
}

export default ResetForm;
