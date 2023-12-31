import React from "react";
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  // console.log(course);
  const { title, thumbnail, description, availableSeat, price } = course;
  // console.log(availableSeat);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="w-96 h-full border bg-white rounded-lg border-success hover:border-warning duration-150 transition-[border] shadow-md p-4 transform hover:scale-105"
    >
      <img src={thumbnail} alt={title} className="w-full h-56 mb-2" />
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm">Description: {description}</p>
        <p className="text-gray-600 text-2xl">
          Available Seats: {availableSeat}
        </p>
        <p className="text-secondary text-2xl">Price: {price}</p>
        <div className="mt-2">
          <motion.button
            whileTap={{ scale: 0.7 }}
            whileHover={{ scale: 0.9 }}
            className="bg-success text-white px-4 py-2 rounded-md "
          >
            Select
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
