import React from "react";

const AddCourse = () => {
  const courseHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const courseName = form.course;
    const instructorName = form.instructorName;
    const instructorEmail = form.instructorEmail;
    const price = form.price;
    const availableSeat = form.Seat;
    const image = form.course;
    const description = form.description;
    const courseDetails = {
      courseName,
      instructorName,
      instructorEmail,
      price,
      availableSeat,
      image,
      description,
    };
    console.log(courseDetails);
  };
  return (
    <div className="w-full h-full">
      <div>
        <h2 className="text-2xl text-center mx-auto lg:text-5xl font-semibold mb-3">
          Add Course
        </h2>
        <hr />
      </div>
      <div className="mx-20 mt-5">
        <form onSubmit={courseHandler}>
          <div className="form-control my-1">
            <label htmlFor="course">Course Name:*</label>
            <input
              type="text"
              name="course"
              id="course"
              placeholder="Type Your course name"
              className="input input-bordered border-2 border-secondary"
              required
            />
          </div>
          <div className="grid grid-cols-2 my-1 gap-4 items-center ">
            <div className="form-control">
              <label htmlFor="instructorName">Instructor Name:*</label>
              <input
                type="text"
                name="instructorName"
                id="instructorName"
                className="input input-bordered border-2 border-secondary"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="instructorEmail">Instructor Email:*</label>
              <input
                type="email"
                name="instructorEmail"
                id="instructorEmail"
                className="input input-bordered border-2 border-secondary"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 my-1 gap-4 items-center ">
            <div className="form-control">
              <label htmlFor="Price">Price:*</label>
              <input
                type="text"
                name="Price"
                placeholder="Type your course price"
                id="Price"
                className="input input-bordered border-2 border-secondary"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="Seat">Available Seat:*</label>
              <input
                type="text"
                name="Seat"
                placeholder="Type your course available seat"
                id="Seat"
                className="input input-bordered border-2 border-secondary"
                required
              />
            </div>
          </div>
          <div className="form-control my-1">
            <label htmlFor="url">Photo URL:*</label>
            <input
              type="url"
              name="url"
              placeholder="Paste your Photo URL"
              id="url"
              className="input input-bordered border-2 border-secondary"
              required
            />
          </div>
          <div className="form-control my-1">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              className="textarea textarea-bordered border-2 border-secondary"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="text-center my-1">
            <input
              type="submit"
              value="Add Course"
              className="btn btn-secondary mt-4 mx-auto text-center"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
