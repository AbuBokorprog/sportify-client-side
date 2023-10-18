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
          <div className="absolute top-4 lg:top-40 left-0 mx-auto text-center text-white">
            <p className="text-5xl font-bold mb-4">
              Welcome to best sports Academy
            </p>
            {/* <hr className="mx-44" /> */}
            <h2 className="text-4xl font-semibold my-2">
              Unlock Your Full Potential!
            </h2>
            <p className="py-2 text-center mx-40">
              Join our academy for elite training, expert coaching, and a
              winning community. Elevate your game and fulfill your athletic
              dreams with us.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-secondary lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide1">
          <img
            className="bg-cover w-screen relative max-h-screen bg-center"
            src="/black-banner.png"
            alt=""
          />
          <div className="absolute top-4 lg:top-40 left-0 mx-auto text-center text-white">
            <p className="text-5xl font-bold mb-4">
              Welcome to best sports Academy
            </p>
            {/* <hr className="mx-44" /> */}
            <h2 className="text-4xl font-semibold my-2">
              Unlock Your Full Potential!
            </h2>
            <p className="py-2 text-center mx-40">
              Join our academy for elite training, expert coaching, and a
              winning community. Elevate your game and fulfill your athletic
              dreams with us.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-secondary lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide1">
          <img
            className="bg-cover w-screen relative max-h-screen bg-center"
            src="/black-banner.png"
            alt=""
          />
          <div className="absolute top-4 lg:top-40 left-0 mx-auto text-center text-white">
            <p className="text-5xl font-bold mb-4">
              Welcome to best sports Academy
            </p>
            {/* <hr className="mx-44" /> */}
            <h2 className="text-4xl font-semibold my-2">
              Unlock Your Full Potential!
            </h2>
            <p className="py-2 text-center mx-40">
              Join our academy for elite training, expert coaching, and a
              winning community. Elevate your game and fulfill your athletic
              dreams with us.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-secondary lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide1">
          <img
            className="bg-cover w-screen relative max-h-screen bg-center"
            src="/black-banner.png"
            alt=""
          />
          <div className="absolute top-4 lg:top-40 left-0 mx-auto text-center text-white">
            <p className="text-5xl font-bold mb-4">
              Welcome to best sports Academy
            </p>
            {/* <hr className="mx-44" /> */}
            <h2 className="text-4xl font-semibold my-2">
              Unlock Your Full Potential!
            </h2>
            <p className="py-2 text-center mx-40">
              Join our academy for elite training, expert coaching, and a
              winning community. Elevate your game and fulfill your athletic
              dreams with us.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-secondary lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide1">
          <img
            className="bg-cover w-screen relative max-h-screen bg-center"
            src="/black-banner.png"
            alt=""
          />
          <div className="absolute top-4 lg:top-40 left-0 mx-auto text-center text-white">
            <p className="text-5xl font-bold mb-4">
              Welcome to best sports Academy
            </p>
            {/* <hr className="mx-44" /> */}
            <h2 className="text-4xl font-semibold my-2">
              Unlock Your Full Potential!
            </h2>
            <p className="py-2 text-center mx-40">
              Join our academy for elite training, expert coaching, and a
              winning community. Elevate your game and fulfill your athletic
              dreams with us.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-secondary lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide1">
          <img
            className="bg-cover w-screen relative max-h-screen bg-center"
            src="/black-banner.png"
            alt=""
          />
          <div className="absolute top-4 lg:top-40 left-0 mx-auto text-center text-white">
            <p className="text-5xl font-bold mb-4">
              Welcome to best sports Academy
            </p>
            {/* <hr className="mx-44" /> */}
            <h2 className="text-4xl font-semibold my-2">
              Unlock Your Full Potential!
            </h2>
            <p className="py-2 text-center mx-40">
              Join our academy for elite training, expert coaching, and a
              winning community. Elevate your game and fulfill your athletic
              dreams with us.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-secondary lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide1">
          <img
            className="bg-cover w-screen relative max-h-screen bg-center"
            src="/black-banner.png"
            alt=""
          />
          <div className="absolute top-4 lg:top-40 left-0 mx-auto text-center text-white">
            <p className="text-5xl font-bold mb-4">
              Welcome to best sports Academy
            </p>
            {/* <hr className="mx-44" /> */}
            <h2 className="text-4xl font-semibold my-2">
              Unlock Your Full Potential!
            </h2>
            <p className="py-2 text-center mx-40">
              Join our academy for elite training, expert coaching, and a
              winning community. Elevate your game and fulfill your athletic
              dreams with us.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-secondary lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide1">
          <img
            className="bg-cover w-screen relative max-h-screen bg-center"
            src="/black-banner.png"
            alt=""
          />
          <div className="absolute top-4 lg:top-40 left-0 mx-auto text-center text-white">
            <p className="text-5xl font-bold mb-4">
              Welcome to best sports Academy
            </p>
            {/* <hr className="mx-44" /> */}
            <h2 className="text-4xl font-semibold my-2">
              Unlock Your Full Potential!
            </h2>
            <p className="py-2 text-center mx-40">
              Join our academy for elite training, expert coaching, and a
              winning community. Elevate your game and fulfill your athletic
              dreams with us.
            </p>
            <div>
              <button className="btn btn-error font-medium bg-secondary lg:px-10 border-0">
                View More
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
