// eslint-disable-next-line
import react from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormIcon from "../assets/App Icon and Text 1formIcon.png";

import HeroIcon from "../assets/Wander Earth Icon 2.png";

import "../styles/login.css";

function LoginForm() {
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

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  const forgotPassword = () => {
    navigate("/resetPassword");
  };

  return (
    <div className="heroContainer">
      <form onSubmit={handleSubmit} action="/loginPage.js" method="post">
        <img src={FormIcon} alt="Form display" className="formIcon" />

        <div className="loginInputs">
          <div className="userName">
            <p className="inputTitle">Username</p>
            <input
              placeholder="UserName"
              className="UserName formField"
              name="username"
              type="text"
              onChange={handleChange}
            ></input>
            <br />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>

          <div className="loginPassword">
            <p className="inputTitle">Password</p>
            <input
              placeholder="******"
              className="Password1 formField"
              name="Password"
              type="password"
              onChange={handleChange}
            ></input>
            <br />
            <a className="forgotPassword" onClick={forgotPassword}>
              FORGOT PASSWORD?
            </a>
            <br />
            {errors.Password && (
              <span className="error">{errors.Password}</span>
            )}
          </div>
        </div>

        <div className="buttonandotherOption">
          <button className="loginButton button" type="submit">
            Login
          </button>
          <p className="otherOption">
            A new User?
            <a className="signupText" name="signup" onClick={handleClick}>
              SIGNUP
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

export default LoginForm;
