import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
const AdminDashboard = () => {
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
                <div className="col-md-12 ">
                    fdkfjkd
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
