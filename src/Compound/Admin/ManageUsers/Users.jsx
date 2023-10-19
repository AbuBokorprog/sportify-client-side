import React from "react";

const Users = (props) => {
  console.log(props.user);
  const { email, gender, name, role, photoURL, _id } = props.user;
  return (
    <>
      <tr>
        <th>1</th>
        <td>
          <img className="w-14 rounded-full" src={photoURL} alt="" />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
      </tr>
    </>
  );
};

export default Users;
