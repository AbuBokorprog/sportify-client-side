import React from "react";

const Course = (props) => {
  // console.log(props.course);
  const { title, thumbnail, description, availableSeat, price } = props.course;
  console.log(props.Course);
  return (
    <div>
      <div className="card w-80 h-80 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={thumbnail} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Course Name: {title}</h2>
          <p>available Seat: {availableSeat}</p>
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
