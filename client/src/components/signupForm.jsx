//eslint-disable-next-line
import react from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormIcon from "../assets/App Icon and Text 1formIcon.png";

import HeroIcon from "../assets/Wander Earth Icon 2.png";

import "../styles/form.css";

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    Password: "",
    Password2: "",
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

    if (!formData.username.trim()) {
      validateError.username = "Username is required";
    }

    if (!formData.email.trim()) {
      validateError.email = "Email Address is required";
    } else if (!emailFormat.test(formData.email)) {
      validateError.email = "Email Address is not valid";
    }

    if (!formData.Password.trim()) {
      validateError.Password = "Password is required";
    } else if (formData.Password.trim().length < 6) {
      validateError.Password = "Password must be above 6 characters";
    }

    if (!formData.Password2.trim()) {
      validateError.Password2 = "Password is required";
    } else if (formData.Password2.trim() !== formData.Password) {
      validateError.Password2 = "Password does not match";
    }

    setErrors(validateError);

    if (Object.keys(validateError).length === 0) {
      console.log("Form submitted");
    }

    axios
      .post("http://localhost:5000/", { formData })
      .then((results) => {
        console.log(results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="heroContainer">
      <form action="/signup.js" method="post" onSubmit={handleSubmit}>
        <img src={FormIcon} alt="Form display" className="formIcon" />

        <div className="signupInputs">
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

          <div className="email">
            <p className="inputTitle">Email Address</p>
            <input
              placeholder="johndoe@email.com"
              className="email formField"
              name="email"
              type="email"
              onChange={handleChange}
            ></input>
            <br />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="Password">
            <p className="inputTitle">Password</p>
            <input
              placeholder="******"
              className="Password1 formField"
              name="Password"
              type="password"
              onChange={handleChange}
            ></input>
            <br />
            {errors.Password && (
              <span className="error">{errors.Password}</span>
            )}
          </div>

          <div className="c-Password">
            <p className="inputTitle">Confirm Password</p>
            <input
              placeholder="******"
              className="Password2 formField"
              name="Password2"
              type="password"
              onChange={handleChange}
            ></input>
            <br />
            {errors.Password2 && (
              <span className="error">{errors.Password2}</span>
            )}
          </div>
        </div>
        <div className="buttonandotherOption">
          <button className="signupButton button" type="submit">
            Signup
          </button>
          <p className="otherOption">
            Do you have an account already?
            <a className="loginText" name="login" onClick={handleClick}>
              LOGIN
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

export default SignupForm;
