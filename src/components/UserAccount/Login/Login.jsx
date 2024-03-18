import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
const Login = () => {
  

  return (
    <>
      <section id="login">
        <div className="container my-5">
          <div className="row justify-content-center align-items-center">
            {/* first-part */}
            <div className="col-md-6 login-part-one">
              {/* card header */}
              <div className="card text-center border-0 outline-none d-flex gap-3">
                <div className="card-header bg-transparent border-0">
                  <h1>Sign in to Hidden Spot</h1>
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
                <p>or use your username or email account</p>
              </div>
              {/* card body */}
              <div className="card-body user-register-card-body">
                <form
                  action="/"
                  method="POST"
                  className="user-register-form d-flex flex-column gap-3 mt-2"
                >
                  {/* username or email */}
                  <div className="email-input-icon text-center">
                    <i className="fa-solid fa-envelope email-icon"></i>
                    <input
                      type="text"
                      placeholder="Username or Email"
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
                      autoComplete="off"
                      //   name="password"
                      //   value="password"
                    />
                  </div>
                </form>
              </div>
              {/* card footer */}
              <div className="card-footer  my-5 d-flex flex-column text-center justify-content-center align-items-center">
                <NavLink to={`/`} className="text-muted">
                  Forgot your password?
                </NavLink>
                <br />
                <a
                  href="/user/login"
                  className="text-decoration-none login-btn"
                >
                  SIGN IN
                </a>
              </div>
            </div>
            {/* second-part */}
            <div className="col-md-4 login-part-two">
              <div className="heading-detail-signup-btn text-white d-flex flex-column gap-2 text-center">
                <h1 className="fw-bold">Hello, Friend!</h1>
                <p>
                  Enter your personal details <br /> and start journey with us
                </p>
                <NavLink
                  to={`/user/register`}
                  className="text-decoration-none register-btn mx-auto"
                >
                  SIGN UP
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
