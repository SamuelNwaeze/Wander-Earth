// eslint-disable-next-line
import React from "react";

import ReactDOM from "react-dom/client";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/loginPage.js";
import Reset from "./pages/resetPassword.js";
import Sign from "./pages/signup.js";
import ResetCode from "./pages/resetPasswordNext.js";

import Loader from "./pages/loadingscreen.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="resetPassword" element={<Reset />} />
        <Route path="signup" element={<Sign />} />
        <Route path="loadingScreen" element={<Loader />} />
        <Route path="resetCode" element={<ResetCode />} />
      </Routes>
    </BrowserRouter>
  </div>
);
