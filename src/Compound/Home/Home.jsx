import React from "react";
import Banner from "./Banner";
import TopCourses from "./TopCourses/TopCourses";
import TopInstructor from "./TopInstructor/TopInstructor";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCourses></TopCourses>
      <TopInstructor></TopInstructor>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
