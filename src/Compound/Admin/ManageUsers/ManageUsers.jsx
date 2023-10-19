import axios from "axios";
import React, { useState } from "react";
import Users from "./Users";

const ManageUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  axios.get("/admin/user").then((res) => {
    setAllUsers(res.data);
  });
  return (
    <div className="w-full h-full mx-auto">
      <div className="overflow-x-auto">
        <div>
          <h2 className="text-2xl lg:text-5xl font-semibold mb-3">
            All Users:
          </h2>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index = 0) => (
              <Users key={user._id} user={user} index={index + 1}></Users>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
