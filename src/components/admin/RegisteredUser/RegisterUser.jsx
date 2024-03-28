import React from "react";
import "./RegisterUser.css"
const RegisterUser = ({ registeredUser }) => {

    return (

        <>
            <div className="card register-user py-2">
                <div className="icon-register-user">

                    <div className="icon-box">

                        <i className="fa-solid fa-user fs-3 user-icon"></i>


                    </div>

                    <div className="registered-user-number ms-5 text-end">
                        <span>Registered User</span> <br />
                        <span className="fw-bold fs-3">{registeredUser}</span>
                    </div>

                </div>
                <hr />
            </div>
        </>
    )
}

export default RegisterUser