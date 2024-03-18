import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";
const AdminSidebar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-12  admin-sidebar">
            <ul className="d-flex flex-column gap-3">
              {/* dashboard */}
              <li className="list-unstyled d-flex flex-row align-items-center gap-3">
                <i className="fa-solid fa-gauge"></i>
                <NavLink
                  to={`/admin/dashboard`}
                  className="text-decoration-none"
                >
                  <span>Dashboard</span>
                </NavLink>
              </li>
              {/* registered user */}
              <li className="list-unstyled d-flex flex-row align-items-center gap-3">
                <i className="fa-solid fa-user"></i>
                <NavLink
                  to={`/admin/dashboard`}
                  className="text-decoration-none"
                >
                  <span>Registered Users</span>
                </NavLink>
              </li>
              {/* product category */}
              <li className="list-unstyled d-flex flex-row align-items-center gap-3">
                <i className="fa-solid fa-list"></i>
                <NavLink
                  to={`/admin/dashboard`}
                  className="text-decoration-none"
                >
                  <span>Category</span>
                </NavLink>
              </li>
              {/* items */}
              <li className="list-unstyled d-flex flex-row align-items-center gap-3">
                <i className="fa-solid fa-bowl-food"></i>
                <NavLink
                  to={`/admin/dashboard`}
                  className="text-decoration-none"
                >
                  <span>Items</span>
                </NavLink>
              </li>
              {/* orders*/}
              <li className="list-unstyled d-flex flex-row align-items-center gap-3">
                <i className="fa-solid fa-arrow-down-up-across-line"></i>
                <NavLink
                  to={`/admin/dashboard`}
                  className="text-decoration-none"
                >
                  <span>Orders</span>
                </NavLink>
              </li>
              {/* drivers */}
              <li className="list-unstyled d-flex flex-row align-items-center gap-3">
                <i className="fa-solid fa-user"></i>
                <NavLink
                  to={`/admin/dashboard`}
                  className="text-decoration-none"
                >
                  <span>Drivers</span>
                </NavLink>
              </li>
              {/* revenue */}
              {/* reports */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
