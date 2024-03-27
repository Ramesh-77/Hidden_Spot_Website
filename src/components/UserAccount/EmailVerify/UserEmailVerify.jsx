// import axios from "axios";
import React, { useRef, useState } from "react";
import "./UserEmailVerify.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { successToast } from "../../../utils/Toast/successToast";
const UserEmailVerify = () => {

  const [otp, setOTP] = useState({
    otp: ""
  })

  const param = useParams();

  const formRef = useRef(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setOTP({ ...otp, [e.target.name]: e.target.value })
  }

  async function handleOTP() {
    const response = await axios.post(`http://localhost:8000/api/v1/users/register/${param.id}`, otp)
    if (response?.data?.statusCode === 200 && response?.data?.success === true) {
      successToast(response?.data?.message)
      setTimeout(() => {
        formRef.current.reset()
      }, 2000);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleOTP()
    navigate("/user/login")

  }
  // console.log(otp)
  return (
    <>
      <section id="userEmailVerify">

        <div className="container-fluid my-5">
          <div className="row my-5 justify-content-center align-items-center">
            <div className="col-md-5">
              <div className="card p-3">
                <h4 className="text-center fw-bold" >Welcome to Hidden Spot</h4>
                <h5 className="text-center fw-bold" >Activate your account</h5>
                <form ref={formRef} onSubmit={handleSubmit} >
                  <div className="mb-3">
                    <input type="text" className="form-control px-3 w-100"
                      id="otp" name="otp" placeholder="Enter OTP"
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default UserEmailVerify;
