import React from "react";

const MyEnrolledCourses = () => {
  return (
    <div className="w-full h-full mx-auto ">
      <h1 className="text-2xl lg:text-3xl font-semibold mb-3 ps-4">
        My Enrolled Courses
      </h1>

      <div className="grid md:grid-cols-3 px-4 gap-3 justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/234048256/original/2a66a557dbba7cb83e8f56a0a27dcd44363c9007/design-a-fake-certificate-for-you.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Course Title
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <h3>Instructor: </h3>
            <h3>Price: </h3>
            <h3>Available Seats: </h3>
            <p>Details: If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">Remove Course</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledCourses;
