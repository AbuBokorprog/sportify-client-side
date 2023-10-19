import axios from "axios";
import React, {useEffect, useState} from "react";
import Users from "./Users";

const ManageUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/admin/user")
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              <th>Gender</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => (
              <Users key={user._id} user={user} count={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
