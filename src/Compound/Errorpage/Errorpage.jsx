import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="text-6xl text-red-500 font-extrabold text-center flex justify-center items-center rounded-full bg-black h-72 p-4 w-72">
                Error <br />
                404 Not Found

            </div>
            <p className="text-2xl my-4">Oops! Something went wrong.</p>
            <Link to="/" className="bg-primary text-lg text-white font-bold px-8 py-2 rounded-md hover:text-secondary ">
                Home
            </Link>
        </div>
    );
};

export default ErrorPage;
