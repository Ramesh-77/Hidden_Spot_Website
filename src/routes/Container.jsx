import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Register from "../components/UserAccount/Register/Register";
import Login from "../components/UserAccount/Login/Login";
import AdminDashboard from "../components/admin/AdminDashboard/AdminDashboard";
import UserDashboard from "../components/UserAccount/UserDashboard/UserDashboard";
import UserEmailVerify from "../components/UserAccount/EmailVerify/UserEmailVerify";
// react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetValidUserData from "../components/UserAccount/GetValidUserData/GetValidUserData";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import ViewRegisterUser from "../components/admin/RegisteredUser/ViewRegisterUser";
const Container = () => {
  let token = Cookies.get("accessToken")
  let decodeToken;
  if (token) {

    decodeToken = jwtDecode(token)
    // console.log("decodeToken", decodeToken)

  }
  // console.log(token?.fullName)
  return (
    <>
      <ToastContainer />

     

      <Routes>
        {/* home */}
        <Route exact path="/" element={<Home />} />
        {/* user account */}
        <Route exact path="user">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="register/:id" element={<UserEmailVerify />} />


          {/* protected routes */}
          {token && decodeToken && decodeToken?.isVerified && decodeToken?.role==="USER" &&
            <Route path="info" element={<GetValidUserData decodeToken={decodeToken} />} />
          }



        </Route>
        {/* admin */}
        { token && decodeToken && decodeToken?.isVerified && decodeToken?.role === "ADMIN" && (
          <Route exact path="admin">
          <Route path="dashboard" element={<AdminDashboard  />} />
          <Route path="registered-users" element={<ViewRegisterUser />} />
        </Route>

         )}
        
      </Routes>
    </>
  );
};
export default Container;
