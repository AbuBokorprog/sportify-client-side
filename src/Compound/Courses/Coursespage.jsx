import React, { useEffect, useState } from "react";
import CourseCard from "../Home/TopCourses/Coursecard";


const Coursespages = () => {
    const [topCourses, setTopCourses] = useState([]);
    useEffect(() => {
        fetch("/TopCourses.json")
            .then((res) => res.json())
            .then((data) => {
                setTopCourses(data);
            });
    }, []);

    return (
        <div className="my-20  ">
            <p className="text-3xl font-bold ms-72 mb-20 ">All Course :</p>
            <div className="flex flex-col justify-center items-center">
                <div className="grid lg:grid-cols-3 gap-5 mx-auto">
                    {topCourses.map((C) => (
                        <CourseCard key={C.id} course={C}></CourseCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Coursespages;
