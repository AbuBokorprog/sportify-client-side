import React, { useEffect, useState } from "react";
import Course from "./Course";

const TopCourses = () => {
  const [topCourses, setTopCourses] = useState([]);
  useEffect(() => {
    fetch("/TopCourses.json")
      .then((res) => res.json())
      .then((data) => {
        setTopCourses(data);
      });
  }, []);

  return (
    <div className="my-20">
      <div className="text-center mb-5">
        <h2 className="text-2xl lg:text-5xl font-semibold my-3">
          Explore Our Top Courses
        </h2>
        <p className="mx-4 lg:mx-16 text-sm">
          Discover a world of opportunity through our premier sports courses.
          Tailored for all levels and ages, our top programs encompass a range
          of sports, from tennis to soccer, designed to unlock your potential.
          Join us and embark on a journey to excellence in your chosen sport."
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 mx-auto">
        {topCourses.map((C) => (
          <Course key={C.id} course={C}></Course>
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
