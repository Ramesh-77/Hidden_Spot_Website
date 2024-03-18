import React from "react";
import "./AdminNavbar.css";
const AdminNavbar = () => {
  return (
    <>
      {/* admin navbar */}
      <div className="container-fluid admin-navbar p-2 my-4">
        <div className="row mt-4">
          {/* dashboard */}
          <div className="col-md-3">
            <div className="icon-dashboard d-flex flex-row gap-4 justify-content-start align-items-center">
              <i className="fa-solid fa-bars dashboard-icon fs-4"></i>
              <span className="fw-bold">
                Dashboard <br />{" "}
                <span className="welcome-hidden-spot">
                  Welcome to Hidden Spot
                </span>
              </span>
            </div>
          </div>
          {/* search */}
          <div className="col-md-5 ">
            <div className="search-input-icon ">
              <input
                type="text"
                placeholder="Search here..."
                className="search-input w-100"
              />
              <i className="fa-solid fa-magnifying-glass search-icon text-muted"></i>
            </div>
          </div>
          {/* profile */}
          <div className="col-md-3">
            <div className="profile-name-role d-flex flex-row justify-content-end align-items-center gap-3">
              <img
                src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
                alt="profile-pic"
                className="img-fluid"
                width={50}
              />
              <div className="name-role">
                <span className="fw-bold">Ramesh Pathak</span> <br />
                <span>Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
