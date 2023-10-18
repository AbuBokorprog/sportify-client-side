import React from "react";
import Banner from "./Banner";
import TopCourses from "./TopCourses/TopCourses";
import TopInstructor from "./TopInstructor/TopInstructor";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCourses></TopCourses>
      <TopInstructor></TopInstructor>
    </div>
  );
};

export default Home;
