// eslint-disable-next-line
import react from "react";

import FormIcon from "../assets/App Icon and Text 1formIcon.png";

import HeroIcon from "../assets/Wander Earth Icon 2.png";

import "../changePassword.css";

function CodeForm() {
  return (
    <div className="heroContainer">
      <form>
        <img src={FormIcon} alt="Form display" className="formIcon" />

        <div className="formInputs">
          <div className="userName">
            <p>New Password</p>
            <input
              placeholder="New Password"
              className="newPassword formField"
              name="username"
              type="text"
            ></input>
          </div>

          <div className="Password">
            <p>Confirm Password</p>
            <input
              placeholder="Confirm Password"
              className="confirmPassword formField"
              name="Password"
              type="password"
            ></input>
          </div>
        </div>

        <button className="changePasswordButton">Change Password</button>
      </form>

      <div className="heroImage">
        <img src={HeroIcon} alt="Hero Image" className="heroIcon" />
      </div>
    </div>
  );
}

export default CodeForm;
