import React from "react";
import WhatDoes from "./WhatDoes";
import FAQ from "./FAQ";

const About = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl lg:text-5xl font-semibold mb-3  text-center">
          About us
        </h2>
      </div>
      <div className="flex items-center gap-4 px-4 mb-20 mt-10">
        <div>
          <img
            className=" rounded-xl"
            src="https://images.unsplash.com/photo-1631495634750-0f14320bc0a7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-4xl font-medium mb-2">VISION & PHILOSOPHY</h3>
          <p className="text-xl">
            At Sportify, we envision a world where everyone can lead a
            healthier, happier life. Our philosophy revolves around three key
            principles:
          </p>
          <ul className="">
            <li className="my-2">
              <span className="text-xl font-medium">Empower:</span> We empower
              our members to take control of their health by offering top-notch
              facilities, expert guidance, and a supportive community.
            </li>
            <li className="my-2">
              <span className="text-xl font-medium">Energize:</span> Our vibrant
              community inspires and motivates individuals, ensuring they remain
              energized throughout their fitness journey.
            </li>
            <li className="my-2">
              <span span className="text-xl font-medium">
                Elevate:
              </span>
              We focus on holistic well-being, encouraging the improvement of
              physical, mental, and emotional health.
            </li>
          </ul>
        </div>
      </div>
      <WhatDoes></WhatDoes>
      <FAQ></FAQ>
    </div>
  );
};

export default About;
