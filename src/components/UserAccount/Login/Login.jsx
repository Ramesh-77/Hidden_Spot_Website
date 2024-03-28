import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import axios from "axios";
// import { successToast } from "../../../utils/Toast/successToast";
import Cookies from "js-cookie";
const Login = () => {
  const [users, setUsers] = useState({
    email: "",
    password: ""
  })
  const [accessToken, setAccessToken] = useState(Cookies.get("accessToken"))
  const [refreshToken, setRefreshToken] = useState(Cookies.get("refreshToken"))
  const formRef = useRef(null)

  const getUserLoginData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  async function loginHandle() {
    const response = await axios.post("http://localhost:8000/api/v1/users/login", users)
    const result = await response?.data
    try {
      const {accessToken, refreshToken} = await result?.data;
      console.log("accessToken", accessToken)
      console.log("refreshTokenToken", refreshToken)
      setAccessToken(accessToken)
      setRefreshToken(refreshToken)
      Cookies.set("accessToken", accessToken, {expires: 1})
      Cookies.set("refreshToken", refreshToken, {expires: 7})

    } catch (error) {
      console.error("Login error: ", error)
    }
    // const accessToken = await result?.data?.accessToken
    // const refreshToken = await result?.data?.refreshToken
    // console.log("accessToken",accessToken)
    // console.log("refreshToken",refreshToken)
    // if (response?.data?.statusCode === 200 && response?.data?.success === true) {
    //   successToast(response?.data?.message)
    // }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    loginHandle()
    formRef.current.reset()
  }
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
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="user-register-form d-flex flex-column gap-3 mt-2"
                >
                  {/* username or email */}
                  <div className="email-input-icon text-center">
                    <i className="fa-solid fa-envelope email-icon"></i>
                    <input
                      type="text"
                      placeholder="Username or Email"
                      name="email"
                      onChange={getUserLoginData}
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
                      onChange={getUserLoginData}

                    //   value="password"
                    />
                  </div>
                  {/* card footer */}
                  <div className="card-footer  my-5 d-flex flex-column text-center justify-content-center align-items-center">
                    <NavLink to={`/`} className="text-muted">
                      Forgot your password?
                    </NavLink>
                    <br />
                    <button type="submit"
                      className="btn  login-btn"
                    >
                      SIGN IN
                    </button>
                  </div>
                </form>
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
