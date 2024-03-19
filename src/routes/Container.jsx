import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Register from "../components/UserAccount/Register/Register";
import Login from "../components/UserAccount/Login/Login";
import AdminDashboard from "../components/admin/AdminDashboard/AdminDashboard";
import UserDashboard from "../components/UserAccount/UserDashboard/UserDashboard";
import UserEmailVerify from "../components/UserAccount/EmailVerify/UserEmailVerify";
const Container = () => {
  return (
    <>
      <Routes>
        {/* home */}
        <Route exact path="/" element={<Home />} />
        {/* user account */}
        <Route exact path="user">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="register/:id/:token" element={<UserEmailVerify />} />
        </Route>
        {/* admin */}
        <Route exact path="admin">
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </>
  );
};
export default Container;
