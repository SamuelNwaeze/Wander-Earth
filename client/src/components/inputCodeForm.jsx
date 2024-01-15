// eslint-disable-next-line
import react from "react";
import { useState } from "react";

import FormIcon from "../assets/App Icon and Text 1formIcon.png";

import HeroIcon from "../assets/Wander Earth Icon 2.png";

import "../styles/inputcode.css";

function CodeForm() {
  const [formData, setFormData] = useState({
    firsCode: "",
    secondCode: "",
    thirdCode: "",
    lastCode: "",
  });

  const [errors, setErrors] = useState({
    firsCode: "",
    secondCode: "",
    thirdCode: "",
    lastCode: "",
  });

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

    if (value && e.target.nextElementSibling) {
      e.target.nextElementSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = {};

    if (!formData.firstCode) {
      validateError.firstCode =
        "Check your mail box for the verification code.";
    }
    if (!formData.secondCode) {
      validateError.firstCode =
        "Check your mail box for the verification code.";
    }
    if (!formData.thirdtCode) {
      validateError.firstCode =
        "Check your mail box for the verification code.";
    }
    if (!formData.lastCode) {
      validateError.firstCode =
        "Check your mail box for the verification code.";
    }

    setErrors(validateError);

    if (Object.keys(validateError).length === 0) {
      alert("Code Verified✅");
    }
  };

  return (
    <div className="heroContainer">
      <form action="#" method="post" onSubmit={handleSubmit}>
        <img src={FormIcon} alt="Form display" className="formIcon" />

        <div className="sent">
          <h1 className="sentText">SENT!</h1>

          <p className="sentParagraph">
            Check your mail box for the verification code.
          </p>
        </div>

        <div className="codeInputs">
          <input
            className="firstCode codeField"
            name="firstCode"
            inputMode="numeric"
            maxLength="1"
            onChange={handleChange}
          ></input>

          <input
            className="secondCode codeField"
            name="secondCode"
            inputMode="numeric"
            maxLength="1"
            onChange={handleChange}
          ></input>

          <input
            className="thirdCode codeField"
            name="thirdCode"
            inputMode="numeric"
            maxLength="1"
            onChange={handleChange}
          ></input>

          <input
            className="lastCode codeField"
            name="lastCode"
            inputMode="numeric"
            maxLength="1"
            onChange={handleChange}
          ></input>

          <br />

          {errors.firstCode && (
            <span className="error">{errors.firstCode}</span>
          )}
        </div>

        <div className="buttonandotherOption">
          <button className="confirmCodeButton button" type="submit">
            Confirm Code
          </button>
          <p className="otherOption">
            Didn&apos;t get a code?
            <a className="resendCodeText" name="resendCode">
              RESEND CODE
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

export default CodeForm;
