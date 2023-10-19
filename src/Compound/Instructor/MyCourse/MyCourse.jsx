import axios from "axios";
import { useEffect, useState } from "react";
import MyCourseTable from "./MyCourseTable";

const MyCourse = () => {
  const [instCourses, setInstCourses] = useState([]);
  useEffect(() => {
    axios
      .get("/instructor/course")
      .then(({ data }) => {
        setInstCourses(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full h-full mx-auto">
      <div className="overflow-x-auto">
        <div>
          <h2 className="text-2xl lg:text-5xl text-center font-semibold mb-3">
            My Courses:
          </h2>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>Available Seat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instCourses &&
              instCourses.map((course) => (
                <MyCourseTable key={course._id} course={course} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCourse;
