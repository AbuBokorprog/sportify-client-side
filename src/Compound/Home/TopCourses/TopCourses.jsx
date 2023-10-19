import React, { useEffect, useState } from "react";
import axios from "axios";
import Course from "./Course";

const TopCourses = () => {
  const [topCourses, setTopCourses] = useState([]);
  useEffect(() => {
    axios
      .get("/course")
      .then(({ data }) => {
        setTopCourses(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const top = topCourses.filter((t) => t.availableSeat < 100);
  return (
    <div className="my-20">
      <div className="flex justify-center items-center flex-col mb-5">
        <h2 className="text-2xl lg:text-5xl font-semibold my-3">
          Explore Our Top Courses
        </h2>
        <p className="w-2/3 lg:mx-16 text-center text-sm mx-auto">
          Discover a world of opportunity through our premier sports courses.
          Tailored for all levels and ages, our top programs encompass a range
          of sports, from tennis to soccer, designed to unlock your potential.
          Join us and embark on a journey to excellence in your chosen sport."
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid lg:grid-cols-3 gap-5 mx-auto">
          {top.slice(0, 5).map((C) => (
            <Course key={C.id} course={C}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
