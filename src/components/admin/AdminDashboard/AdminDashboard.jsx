import React, { useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import RegisterUser from "../RegisteredUser/RegisterUser";
import Item from "../Items/Item";
import Menu from "../Menu/Menu";
import Order from "../Orders/Order";
import { useDispatch, useSelector } from "react-redux";
import { getRegisteredUserData } from "../../../features/slices/GetRegisterUser/getRegisterUserSlice";
const AdminDashboard = () => {

  const registeredUser = useSelector(state => {
    return state?.registeredUsers?.registeredUser?.data
  })

  // console.log(registeredUser?.length)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRegisteredUserData(registeredUser))
  }, [])


  return (
    <>
      <section id="admin-dashboard">
        <div className="container-fluid">
          <div className="row">
            {/* first part - sidebar */}
            <div className="col-md-2">
              <AdminSidebar />
            </div>
            {/* second part - navbar */}
            <div className="col-md-10">
              <AdminNavbar />
              <div className="container">

                <div className="row">
                  <div className="col-md-3 pt-4">
                    <RegisterUser registeredUser={registeredUser?.length}/>
                  </div>
                  <div className="col-md-3 pt-4">
                    <Menu />
                  </div>
                  <div className="col-md-3 pt-4">
                    <Item />
                  </div>
                  <div className="col-md-3 pt-4">
                    <Order />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AdminDashboard;
