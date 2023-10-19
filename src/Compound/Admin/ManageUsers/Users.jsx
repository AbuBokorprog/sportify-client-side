import React from "react";
import {Link} from "react-router-dom";

const Users = (props) => {
  const {email, gender, name, role, photoURL, _id} = props.user;
  return (
    <tr>
      <th>{props.count + 1}</th>
      <td>
        <img className="w-14 rounded-full" src={photoURL} alt="" />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{role}</td>
      <td>
        <Link>Edit</Link> <Link>Delete</Link>
      </td>
    </tr>
  );
};

export default Users;
