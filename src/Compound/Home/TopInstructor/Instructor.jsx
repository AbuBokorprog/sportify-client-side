import React from "react";

const Instructor = (props) => {
  const { id, name, image } = props.instructor;
  //   console.log(props.instructor);
  return (
    <div>
      <div className="card w-96 h-60 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="grayscale hover:grayscale-0" src={'https://media.istockphoto.com/id/1271284931/photo/portrait-of-male-footballer-coaching-mixed-age-players.jpg?s=612x612&w=0&k=20&c=ToMayM4rQgfvhCjeNHutJWbUt9yW5kEHRl5yOu7ZJog='} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Instructor Name: {name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
