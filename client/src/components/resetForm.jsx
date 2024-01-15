// eslint-disable-next-line
import react from "react";

import { useState } from "react";

import FormIcon from "../assets/App Icon and Text 1formIcon.png";

import HeroIcon from "../assets/Wander Earth Icon 2.png";

import "../styles/login.css";

function ResetForm() {
  const [formData, setFormData] = useState({
    email: "",
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
    const emailFormat = /^\S+@\S+\.\S+$/;

    if (!formData.email.trim) {
      validateError.email = "Email Address is required";
    } else if (!emailFormat.test(formData.email)) {
      validateError.email = "Email Address is not valid";
    }

    setErrors(validateError);

    if (Object.keys(validateError).length === 0) {
      alert("Form submitted");
    }
  };

  return (
    <div className="heroContainer">
      <form action="#" method="post" onSubmit={handleSubmit}>
        <img src={FormIcon} alt="Form display" className="formIcon" />

        <div className="emailReset">
          <p className="inputTitle">Email Address</p>

          <input
            placeholder="johndoe@email.com"
            className="email formField"
            name="email"
            type="text"
            onChange={handleChange}
          ></input>

          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="buttonandotherOption">
          <button className="codeButton button" type="submit">
            Send Code
          </button>

          <p className="otherOption">
            Didn&apos;t get a code?
            <a className="resendText" name="resend">
              RESEND
            </a>
          </p>
        </div>
      </form>

      <div className="heroImage">
        <img src={HeroIcon} alt="Hero Image" className="heroIcon" />
      </div>
    </div>
  );
}

export default ResetForm;
