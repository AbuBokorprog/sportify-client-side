import React from "react";

const AddCourse = () => {
  return (
    <div className="w-full h-full">
      <div>
        <h2 className="text-2xl text-center mx-auto lg:text-5xl font-semibold mb-3">
          Add Course
        </h2>
        <hr />
      </div>
      <div className="mx-20 mt-10">
        <form>
          <div className="form-control">
            <label htmlFor="course">Course Name:*</label>
            <input
              type="text"
              name="course"
              id="course"
              className="input input-bordered border-2 border-secondary"
              required
            />
          </div>
          <div>
            <div className="form-control">
              <label htmlFor="course">Course Name:*</label>
              <input
                type="text"
                name="course"
                id="course"
                className="input input-bordered border-2 border-secondary"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="course">Instructor Name:*</label>
              <input
                type="text"
                name="course"
                id="course"
                className="input input-bordered border-2 border-secondary"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
