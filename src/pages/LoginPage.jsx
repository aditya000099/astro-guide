import React from "react";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import bpat from "../assets/bpat.png";
import { FaRegHandPointRight } from "react-icons/fa6";

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    window.location.href = "/"; // Redirect to '/'
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black">
      {/* Image container */}
      <div className="relative flex justify-center items-center w-full h-full">
        <img
          src={bpat}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Blue light gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent"></div>

        {/* Flex container for forms */}
        <div className="absolute inset-0 flex items-center justify-center space-x-8 gap-20">
          {/* Left Login Form */}
          <div className="flex flex-col justify-center items-center bg-white bg-opacity-0 rounded-2xl p-10 px-20 shadow-lg">
            <h2 className="text-5xl font-black text-center text-white mb-4">
              AstroGuide
            </h2>
            <h2 className="text-xl font-semibold text-center text-lime-300 mb-4">
              Your Personal Horoscoper
            </h2>
            <div className="mt-12 flex flex-col justify-start items-start">
              <div className="flex flex-row gap-10 justify-center items-center">
                <FaRegHandPointRight className="text-lime-300 text-xl" />
                <h2 className="text-lg  text-center text-white">
                  Daily Horoscope
                </h2>
              </div>
              <div className="flex flex-row gap-10 justify-center items-center mt-3">
                <FaRegHandPointRight className="text-lime-300 text-xl" />
                <h2 className="text-lg  text-center text-white">
                  Personalised Readings Everyday
                </h2>
              </div>
              <div className="flex flex-row gap-10 justify-center items-center mt-3">
                <FaRegHandPointRight className="text-lime-300 text-xl " />
                <h2 className="text-lg  text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-500">
                  AI horoscope in seconds
                </h2>
              </div>
            </div>

           
          </div>

          {/* Right Login Form */}
          <div className="flex flex-col justify-center items-center bg-white bg-opacity-10 rounded-2xl p-10 px-20 shadow-lg">
            <h2 className="text-2xl font-bold text-center text-white mb-4">
              Login
            </h2>
            <h2 className="text-sm font-semibold text-center text-white mb-4">
              Enter your details to login to your account
            </h2>

            <div className="mb-4 w-full">
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-black focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            <div className="mb-6 w-full">
              <input
                type="password"
                placeholder="Passcode"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-black focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <h1 className="mt-4 text-xs font-semibold text-white text-left w-full">
              Having trouble in sign in?
            </h1>

            <div className="flex items-center justify-between mt-8 w-full">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-lime-300 text-black font-bold py-3 px-4 rounded-lg hover:bg-lime-400 focus:outline-none"
              >
                Login
              </button>
            </div>
            <h1 className="mt-6 text-sm font-semibold text-white text-center">
              Or Sign in with
            </h1>
            <div className="mt-6 flex flex-row gap-3 justify-center items-center">
              <button
                onClick={() => (window.location.href = "/book")}
                className="w-1/2 bg-white bg-opacity-10 text-white border-2 font-bold border-gray-900 rounded-lg px-3 py-2  flex flex-row justify-center items-center gap-3"
              >
                <FaGoogle />
                Google
              </button>
              <button
                onClick={() => (window.location.href = "/book")}
                className="w-1/2 bg-white bg-opacity-10 text-white border-2 font-bold border-gray-900 rounded-lg px-3 py-2  flex flex-row justify-center items-center gap-3"
              >
                <FaApple />
                Apple
              </button>
              {/* <button
                onClick={() => (window.location.href = "/book")}
                className="bg-white border-2 font-bold border-gray-900 rounded-md px-3 py-2 text-gray-900 flex flex-row justify-center items-center gap-3"
              >
                <FaFacebook />
                Facebook
              </button> */}
            </div>
            <h1 className="mt-8 text-sm font-semibold text-white text-center">
              Don't have an account? Sign Up now
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
