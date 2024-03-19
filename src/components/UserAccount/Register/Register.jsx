import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../features/slices/UserRegister/userRegisterSlice";
const Register = () => {
  // getting user input value
  const [users, setUsers] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });
  // import dispatch to handle the action
  const dispatch = useDispatch();
  // setting the user input value into respective variable
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    // console.log(users);
  };
  // submit user register form

  const handleUserRegisterForm = (e) => {
    e.preventDefault(); //not reload the form
    console.log("click register");
    dispatch(registerUser(users));
    console.log("user", users);
    // setUsers("")
  };

  return (
    <>
      <section id="login">
        <div className="container my-5">
          <div className="row justify-content-center align-items-center">
            {/* first-part */}
            <div className="col-md-4 register-part-two">
              <div className="heading-detail-signup-btn text-white d-flex flex-column gap-2 text-center">
                <h1 className="fw-bold">Welcome Back!</h1>
                <p>
                  To keep connected with us please <br /> login with your
                  personal info
                </p>
                <NavLink
                  to={`/user/login`}
                  className="text-decoration-none register-btn mx-auto"
                >
                  SIGN IN
                </NavLink>
              </div>
            </div>
            {/* second-part */}
            <div className="col-md-6 register-part-one">
              {/* card header */}
              <div className="card text-center border-0 outline-none d-flex gap-3">
                <div className="card-header bg-transparent border-0">
                  <h1>Create Account</h1>
                </div>
                {/* social icon login */}
                <div className="social-media-login mb-3">
                  <NavLink
                    to={`/`}
                    className="facebook-login me-4 text-decoration-none"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </NavLink>
                  <NavLink
                    to={`/`}
                    className="gmail-login g-plus text-decoration-none"
                  >
                    <i className="fa-brands fa-google-plus-g"></i>
                  </NavLink>
                </div>
                <p>or use your email for registration</p>
              </div>
              {/* card body */}
              <div className="card-body user-register-card-body">
                <form
                  // action="/"
                  // method="POST"
                  className="user-register-form d-flex flex-column gap-3 mt-2"
                  onSubmit={handleUserRegisterForm}
                >
                  {/* full Name */}
                  <div className="fullName-input-icon text-center">
                    <i className="fa-solid fa-user fullName-icon"></i>
                    <input
                      type="text"
                      placeholder="Full Name"
                      autoComplete="off"
                      name="fullName"
                      onChange={getUserData}
                    />
                  </div>
                  {/* username or email */}
                  <div className="email-input-icon text-center">
                    <i className="fa-solid fa-envelope email-icon"></i>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={getUserData}

                      //   value="email"
                    />
                  </div>
                  {/* username or email */}
                  <div className="password-input-icon text-center">
                    <i className="fa-solid fa-lock password-icon"></i>
                    <input
                      type="password"
                      placeholder="Password"
                      autoComplete="off"
                      name="password"
                      onChange={getUserData}

                      //   value="password"
                    />
                  </div>
                  {/* phone or contact */}
                  <div className="phone-input-icon text-center">
                    <i className="fa-solid fa-phone phone-icon"></i>
                    <input
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      onChange={getUserData}

                      //   value="password"
                    />
                  </div>
                  {/* card footer */}
                  <div className="card-footer my-5 text-center">
                    <button
                      // href="/user/register"
                      type="submit"
                      className="btn text-decoration-none login-btn py-2"
                    >
                      SIGN UP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
