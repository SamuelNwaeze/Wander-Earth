// eslint-disable-next-line
import react from "react";

import { useState } from "react";

import FormIcon from "../assets/App Icon and Text 1formIcon.png";

import HeroIcon from "../assets/Wander Earth Icon 2.png";

import "../styles/changePassword.css";

function CodeForm() {
  const [formData, setFormData] = useState({
    username: "",
    Password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = {};

    if (!formData.username.trim()) {
      validateError.username = "Username is required";
    }

    if (!formData.Password.trim()) {
      validateError.Password = "Password is required";
    } else if (formData.Password.trim().length < 6) {
      validateError.Password = "Password must be above 6 characters";
    }

    setErrors(validateError);

    if (Object.keys(validateError).length === 0) {
      alert("Form submitted");
    }
  };

  return (
    <div className="heroContainer">
      <form onSubmit={handleSubmit}>
        <img src={FormIcon} alt="Form display" className="formIcon" />

        <div className="changePasswordInput">
          <div className="userName">
            <p className="inputTitle">New Password</p>
            <input
              placeholder="New Password"
              className="newPassword formField"
              name="username"
              type="text"
              onChange={handleChange}
            ></input>
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>

          <div className="Password">
            <p className="inputTitle">Confirm Password</p>
            <input
              placeholder="******"
              className="confirmPassword formField"
              name="Password"
              type="password"
              onChange={handleChange}
            ></input>
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>
        </div>

        <button className="changePasswordButton button">Change Password</button>
      </form>

      <div className="heroImage">
        <img src={HeroIcon} alt="Hero Image" className="heroIcon" />
      </div>
    </div>
  );
}

export default CodeForm;
