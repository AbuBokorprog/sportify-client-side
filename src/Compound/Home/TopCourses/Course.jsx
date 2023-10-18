import React from "react";

const Course = (props) => {
  // console.log(props.course);
  const { course_name, instructor_name, image, price, id } = props.course;
  return (
    <div>
      <div className="card w-96 mx-auto h-60 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt={course_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Course Name: {course_name}</h2>
          <p>Instructor Name: {instructor_name}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
