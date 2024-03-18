import React from "react";
import { NavLink } from "react-router-dom";
import "./Register.css"
const Register = () => {
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
                  action="/"
                  method="POST"
                  className="user-register-form d-flex flex-column gap-3 mt-2"
                >
                  {/* full Name */}
                  <div className="fullName-input-icon text-center">
                    <i className="fa-solid fa-user fullName-icon"></i>
                    <input
                      type="text"
                      placeholder="Full Name"
                      autoComplete="off"
                    />
                  </div>
                  {/* username or email */}
                  <div className="email-input-icon text-center">
                    <i className="fa-solid fa-envelope email-icon"></i>
                    <input
                      type="text"
                      placeholder="Email"
                      //   name="email"
                      //   value="email"
                    />
                  </div>
                  {/* username or email */}
                  <div className="password-input-icon text-center">
                    <i className="fa-solid fa-lock password-icon"></i>
                    <input
                      type="password"
                      placeholder="Password"
                      //   name="password"
                      //   value="password"
                    />
                  </div>
                  {/* phone or contact */}
                  <div className="phone-input-icon text-center">
                  <i className="fa-solid fa-phone phone-icon"></i>
                    <input
                      type="text"
                      placeholder="Phone"
                      //   name="password"
                      //   value="password"
                    />
                  </div>
                </form>
              </div>
              {/* card footer */}
              <div className="card-footer my-5 text-center">
                <a
                  href="/user/register"
                  className="text-decoration-none login-btn py-2"
                >
                  SIGN UP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
