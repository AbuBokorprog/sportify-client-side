import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../providers/AuthProvider";
import { FaArrowAltCircleRight, FaSignOutAlt } from "react-icons/fa";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  // console.log(user);

  const handleLogout = () => {
    logout()
      .then((result) => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto px-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="hover:text-secondary" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary" to="/courses">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary" to="/instructor">
                  Our Instructor
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary" to="/aboutUs">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <img className="w-24" src="/logo-removebg.png" alt="" />
          </div>
          <a className="font-bold text-secondary text-2xl">Sportify</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg font-medium px-1">
            <li>
              <Link className="hover:text-secondary" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary" to="/classes">
                Our Courses
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary" to="/instructor">
                Our Instructor
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary" to="dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary" to="/aboutUs">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end font-medium">
          {/* <UserCircleIcon className="w-12 me-2"></UserCircleIcon>
          <Link to="/login" className="text-secondary text-lg font-medium">
            Login
          </Link> */}

          {user ? (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom me-2"
              data-tip={user?.displayName}
            >
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </label>
          ) : (
            <span></span>
          )}
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-ghost btn-md hover:bg-info bg-cyan-700 text-white hover:text-white font-bold"
            >
              <FaSignOutAlt className="me-1"></FaSignOutAlt> Logout
            </button>
          ) : (
            <>
              {/* <UserCircleIcon className="w-12 me-2"></UserCircleIcon> */}

              <span className="btn btn-ghost btn-md hover:bg-info bg-cyan-700 text-white hover:text-white font-bold">
                <FaArrowAltCircleRight className="me-1"></FaArrowAltCircleRight>
                <Link to="/login" className="text-white  text-lg font-medium">
                  Login
                </Link>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
