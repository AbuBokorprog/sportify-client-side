import React from "react";
import Banner from "./Banner";
import TopCourses from "./TopCourses/TopCourses";
import TopInstructor from "./TopInstructor/TopInstructor";
import Gallery from "./Gallery";
import Partner from "./Partner";
import Facilities from "./Facilities";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Partner></Partner>
      <TopCourses></TopCourses>
      <TopInstructor></TopInstructor>
      <Gallery></Gallery>
      <Facilities></Facilities>
    </div>
  );
};

export default Home;
