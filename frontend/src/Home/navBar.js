import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import "./styles/navBar.css";

import img1 from "../components/images/text.gif";

const Navbar = () => {
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
                  <Link
                    className="nav-link"
                    href="/teacher/my/profile"
                  >
                    My Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/teacher/registration">
                    Teacher Registration
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/teacher/complete-registration"
                  >
                    Registration Status
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/teacher/add-course-materials"
                  >
                    Upload Lessons
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/teacher/view-approved-materials"
                  >
                    Lesson Upload Status
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/supervisor/"
                  >
                    My Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/teacher/view-registration"
                  >
                    Current Registration
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/supervisor/view-pending-teachers"
                  >
                    Pending Teachers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/teacher/view-approved-registration"
                  >
                    Permanent Teachers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/teacher/profile"
                  >
                    New Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/teacher/view-profile"
                  >
                    Teacher Profiles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/teacher/view-lesson-materials"
                  >
                    Lesson Materials
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/supervisor/report"
                  >
                    Registration Summary
                  </Link>
                </li>
                <li className="nav-item">
            <Link
              className="nav-link"
              href="/teacher/registration"
            >
              Teacher Registration
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              href="/teacher/complete-registration"
            >
              Registration Status
            </Link>
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
