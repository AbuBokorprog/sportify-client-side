import React from "react";

const MyCourseTable = ({course}) => {
  return (
    <>
      <tr>
        <th>1</th>
        <td>
          <img className="max-w-[100px]" src={course.thumbnail} alt="" />
        </td>
        <td>{course.title}</td>
        <td>{course.price}</td>
        <td>{course.availableSeat}</td>
        <td>Edit Delete</td>
      </tr>
    </>
  );
};

export default MyCourseTable;
