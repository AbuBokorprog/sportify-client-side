import React, {useContext} from "react";
import {Link, Outlet} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";

const Dashboard = () => {
  const {user} = useContext(AuthContext);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li className="text-4xl text-center font-bold">Sportify</li>
            <hr className="border-black my-2" />
            {user?.role == "ADMIN" ? (
              <>
                <li className="text-xl  text-center font-semibold">ADMIN</li>
                <li>
                  <Link
                    to="manageUsers"
                    className="text-xl hover:bg-secondary text-center font-semibold">
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="manageCourses"
                    className="text-xl hover:bg-secondary text-center font-semibold">
                    Manage Courses
                  </Link>
                </li>
              </>
            ) : user?.role == "INSTRUCTOR" ? (
              <>
                <li className="text-xl  text-center font-semibold">
                  Instructor
                </li>
                <li>
                  <Link
                    to="AddCourse"
                    className="text-xl hover:bg-secondary text-center font-semibold">
                    Add Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="MyCourse"
                    className="text-xl hover:bg-secondary text-center font-semibold">
                    My Courses
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="text-xl  text-center font-semibold">Student</li>
                <li>
                  <Link
                    to="mySelectedCourses"
                    className="text-xl hover:bg-secondary text-center font-semibold">
                    My Selected Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="myEnrolledCourse"
                    className="text-xl hover:bg-secondary text-center font-semibold">
                    My Enrolled Courses
                  </Link>
                </li>
                <li>
                  <Link className="text-xl hover:bg-secondary text-center font-semibold">
                    Payment History
                  </Link>
                </li>
              </>
            )}
            <hr className="border-black my-2" />

            <li>
              <Link
                to="/"
                className="text-xl hover:bg-secondary text-center font-semibold">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
