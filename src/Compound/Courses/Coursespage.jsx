import React, { useEffect, useState } from "react";
import CourseCard from "./Coursecard";
import axios from "axios";

const Coursespages = () => {
  const [topCourses, setTopCourses] = useState([]);
  useEffect(() => {
    axios
      .get("/course")
      .then(({ data }) => {
        setTopCourses(data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(topCourses);
  return (
    <div className="my-20">
      <p className="text-3xl text-left ms-10 mb-2 font-bold ">All Course :</p>
      <div className="flex flex-col justify-center items-center">
        <div className="grid lg:grid-cols-3 gap-5 mx-auto">
          {topCourses.map((C) => (
            <CourseCard key={C._id} course={C}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coursespages;
