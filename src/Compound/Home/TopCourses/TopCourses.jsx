import React, { useEffect, useState } from "react";
import CourseCard from "./Coursecard";

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
          {topCourses.map((C) => (
            <CourseCard key={C.id} course={C}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
