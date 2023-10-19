import React from 'react';
import { motion } from 'framer-motion';

const CourseCard = ({ course }) => {
    const { courseName, instructorName, availableSeats, price } = course
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="w-96 h-[30rem] border bg-white rounded-lg border-success hover:border-warning duration-150 transition-[border] shadow-md p-4 transform hover:scale-105"
        >
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjU3do27XZntKaDAUK-sLx1ahb_YmgqQ757xPYA37lpAT8tAt1j-FQdG7Moj0t1J7XFDM&usqp=CAU"
                alt={courseName}
                className="w-full h-56   mb-2"
            />
            <div className='flex flex-col gap-3'>
                <h2 className="text-xl font-semibold">{courseName}</h2>
                <p className="text-gray-600 text-2xl">Instructor: {instructorName}</p>
                <p className="text-gray-600 text-2xl">Available Seats: {availableSeats}</p>
                <p className="text-secondary text-2xl">Price: {price}</p>
                <div className="mt-4">
                    <motion.button
                        whileTap={{ scale: 0.7 }}
                        whileHover={{ scale: 0.9 }}
                        className="bg-secondary text-white px-4 py-2 mr-2 rounded-md">
                        Book Now
                    </motion.button>
                    <motion.button
                        whileTap={{ scale: 0.7 }}
                        whileHover={{ scale: 0.9 }}
                        className="bg-success text-white px-4 py-2 rounded-md ">
                        Select
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;
