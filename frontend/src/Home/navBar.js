import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import "./styles/navBar.css";

import img1 from "../components/images/text.gif";

const Navbar = () =>{
  const history = useHistory();
  const location = useLocation();

const isActive = (history, path) => {
  if(history.location.pathname === path){
      return { color: "#ffffff"}
  } else {
      return { color: "#887688"}
  }
};

  return (
    <div data-testid="nav-1 row">
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <div className="navbar-brand">
            <a className="navbar-brand" href="/">
              &nbsp;
              <img
                src={img1}
                height="40px"
                alt="company text img"
                className="m-0"
              />
            </a>
          </div>

          <button
            className="navbar-toggler ml-auto custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">

              <div className="navbar-nav mr-auto">

              <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/supervisor/')} to="/supervisor/">My Dashboard</Link>
                </li>
                
                 <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/teacher/profile')} to="/teacher/profile">Create Account</Link>
                </li>

                <li className="nav-item">
                   <Link className="nav-link" style={isActive(history, '/teacher/my/profile')} to="/teacher/my/profile">Edit Profile</Link>
                 </li>
               
                <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/teacher/add-course-materials')} to="/teacher/add-course-materials">Add New Product</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/teacher/view-lesson-materials')} to="/teacher/view-lesson-materials">View Products List</Link>
                </li>


                
                <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/supervisor/view-pending-teachers')} to="/supervisor/view-pending-teachers">Pending Products</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/teacher/view-approved-registration')} to="/teacher/view-approved-registration">Approved Products</Link>
                </li>
                
            
                <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/supervisor/report')} to="/supervisor/report">Products Report</Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
