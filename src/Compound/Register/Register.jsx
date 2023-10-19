import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";
import {updateProfile} from "firebase/auth";
import swal from "sweetalert";
import useSetTitle from "../../hooks/useSetTitle";
import {FaGoogle} from "react-icons/fa";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {createUser, logout} = useContext(AuthContext);
  useSetTitle("Register");

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    const gender = form.gender.value; // Retrieve gender from the form
    console.log("gender ", gender);
    setError("");

    if (password !== confirm_password) {
      setError("Passwords do not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    createUser(email, password, {displayName: name, photoURL})
      .then((result) => {
        const loggedUser = result.user;
        event.target.reset();
        updateUser(loggedUser, name, photoURL, gender);

        // Register backend
        axios
          .post("/auth/register", {
            name,
            email,
            photoURL,
            gender,
          })
          .then(({data}) => {
            swal(data.message);
            logout()
              .then(() => navigate("/login"))
              .catch((e) => console.log(e));
          })
          .catch((err) => {
            swal(err);

            logout()
              .then(() => navigate("/login"))
              .catch((e) => console.log(e));
          });
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const updateUser = (user, name, photoURL, gender) => {
    updateProfile(user, {
      displayName: name,
      photoURL,
      gender,
      test: "Test value",
    })
      .then((res) => {
        console.log("res ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginWithGoogleHandler = () => {
    const googleProvider = new GoogleAuthProvider(); // Create a new instance
    loginWithGoogle(googleProvider) // Pass the new instance
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setError("");
        navigate(from || "/", {replace: true});
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleRegister}
          className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <h3 className="text-center text-cyan-700  font-bold mb-1 text-3xl">
            Welcome to Sportify!
          </h3>
          <h4 className="text-center text-info font-medium mb-2 text-lg underline">
            Please Register
          </h4>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="gender">
              Gender
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
              required>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="photoURL">
              PhotoURL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photoURL"
              name="photoURL"
              type="text"
              placeholder="PhotoURL"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password">
              Confirm Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm_password"
              name="confirm_password"
              type="password"
              placeholder="Re-type Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <input
              className=" hover:bg-info bg-cyan-700 text-white hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Register"
            />
            <p>
              {" "}
              Already Registered?{" "}
              <Link
                to="/login"
                className="inline-block align-baseline font-bold text-sm text-cyan-700 hover:text-info">
                Login
              </Link>
            </p>
          </div>
          {error && <p className="text-red-600 mt-3 text-center">{error}</p>}
        </form>

        <div className="flex items-center my-6">
          <hr className="border-t border-gray-300 flex-grow mr-3" />
          <h2 className="text-gray-800 text-lg font-bold">Or</h2>
          <hr className="border-t border-gray-300 flex-grow ml-3" />
        </div>

        <div className="flex justify-center mb-4">
          <button
            onClick={loginWithGoogleHandler}
            className="hover:bg-info bg-cyan-700 text-white hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 flex justify-center items-center">
            <FaGoogle className="me-2" /> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
