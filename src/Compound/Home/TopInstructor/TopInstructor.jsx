import React, { useEffect, useState } from "react";
import Instructor from "./Instructor";

const TopInstructor = () => {
  const [topInstructor, setTopInstructor] = useState([]);
  useEffect(() => {
    fetch("/TopInstructor.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTopInstructor(data);
      });
  }, []);
  return (
    <div className="my-20">
      <div className="text-center mb-5">
        <h2 className="text-2xl lg:text-5xl font-semibold my-3">
          Meet Our Top Instructors
        </h2>
        <p className="mx-4 lg:mx-16 text-sm">
          Explore a team of accomplished professionals who are dedicated to
          shaping your athletic journey. Our top instructors bring a wealth of
          experience and expertise, ensuring you receive the finest training in
          your chosen sport. With a commitment to excellence, they'll guide you
          toward your full potential and sporting success.
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-5 mx-auto">
        {topInstructor.map((Ins) => (
          <Instructor key={Ins.id} instructor={Ins}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default TopInstructor;
