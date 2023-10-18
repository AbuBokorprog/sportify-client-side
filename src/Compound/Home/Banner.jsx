import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./Banner.css";
// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mb-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide1">
          <img
            className="bg-cover w-screen relative max-h-screen bg-center"
            src="/black-banner.png"
            alt=""
          />
          <div className="absolute top-8 lg:top-40 lg:left-72 mx-auto text-center text-white">
            <p className="lg:text-5xl lg:font-bold lg:mb-4">
              Welcome to best sports Academy
            </p>
            {/* <hr className="mx-44" /> */}
            <h2 className="lg:text-4xl lg:font-semibold lg:my-2">
              Unlock Your Full Potential!
            </h2>
            <p className="lg:py-2 text-center mx-14 lg:mx-0">
              Discover Excellence at Our Sports Academy - Join Today!
            </p>
            <div>
              <button className="btn font-medium bg-secondary lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide2">
          <img
            className="bg-cover w-screen relative max-h-screen bg-center"
            src="/banner3.png"
            alt=""
          />
          <div className="absolute top-8 lg:top-40 lg:left-72 mx-auto text-center text-white">
            <p className="lg:text-5xl lg:font-bold lg:mb-4">
              Welcome to best sports Academy
            </p>
            {/* <hr className="mx-44" /> */}
            <h2 className="lg:text-4xl lg:font-semibold lg:my-2">
              Elevate Your Game to New Heights
            </h2>
            <p className="lg:py-2 text-center mx-14 lg:mx-0">
              The Ultimate Sports Training Experience Awaits You.
            </p>
            <div>
              <button className="btn font-medium bg-secondary lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide3">
          <img
            className="bg-cover w-screen relative max-h-screen bg-center"
            src="/banner2.png"
            alt=""
          />
          <div className="absolute top-8 lg:top-40 left-10 lg:left-28 mx-auto text-left text-white">
            <p className="lg:text-5xl lg:font-bold lg:mb-4">
              Welcome to best sports Academy
            </p>
            {/* <hr className="mx-44" /> */}
            <h2 className="lg:text-4xl lg:font-semibold lg:my-2">
              Transform into a Sports Superstar
            </h2>
            <p className="lg:py-2 text-left">
              Elevate your game and fulfill your athletic dreams with us.
            </p>
            <div>
              <button className="btn font-medium bg-secondary lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide4">
          <img
            className="bg-cover w-screen relative max-h-screen bg-center"
            src="/banner1.png"
            alt=""
          />
          <div className="absolute top-8 lg:top-40 left-10 lg:left-20 text-left text-white">
            <p className="lg:text-5xl lg:font-bold lg:mb-4">
              Welcome to best sports Academy
            </p>
            {/* <hr className="mx-44" /> */}
            <h2 className="lg:text-4xl lg:font-semibold lg:my-2">
              Play, Train, and Win!
            </h2>
            <p className="lg:py-2 text-left">
              Your Path to Success in Sports Starts Here.
            </p>
            <div>
              <button className="btn font-medium bg-secondary lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
