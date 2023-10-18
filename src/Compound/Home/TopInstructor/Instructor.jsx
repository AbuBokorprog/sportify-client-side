import React from "react";

const Instructor = (props) => {
  const { id, name, image } = props.instructor;
  //   console.log(props.instructor);
  return (
    <div>
      <div className="card w-96 h-60 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="grayscale hover:grayscale-0" src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Instructor Name: {name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
