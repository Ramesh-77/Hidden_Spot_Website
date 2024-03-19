import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const UserEmailVerify = () => {
  const [validURL, setValidURL] = useState(false);
  const param = useParams();
  console.log(param);

  // function to handle api
  const emailVerify = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/users/register/${param?.id}/${param?.token}`
    );
    try {
      const result = await response?.data;
      if (result) {
        setValidURL(true);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  // using use effect to mount the component
  useEffect(() => {
    emailVerify();
  }, [param]);
  return (
    <>
      {validURL && validURL ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">This is email verify page</div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">Email not verified</div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserEmailVerify;
