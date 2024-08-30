import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
import { FaGoogle, FaApple } from "react-icons/fa";
import bpat from "../assets/bpat.png";
import { FaRegHandPointRight } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import  { jwtDecode } from "jwt-decode";

const SignupPage = () => {
//   const [cookies] = useCookies(['token']);
//   const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          Cookies.remove('authToken');
          toast.error('Session expired. Please log in again.');
        } else {
          window.location.href = '/home';
        }
      } catch (error) {
        Cookies.remove('authToken');
        console.error('Invalid token:', error);
      }
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    //   const response = await axios.post('http://localhost:8080/api/auth/register', {
      const response = await axios.post('https://astroaibackend.onrender.com/api/auth/register', {
        userName,
        userEmail,
        userPassword,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      toast.success(response.data.message);
      console.log('User registered:', response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black">
      <div className="relative flex justify-center items-center w-full h-full">
        <img
          src={bpat}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center space-x-8 gap-20">
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
                <h2 className="text-lg text-center text-white">
                  Daily Horoscope
                </h2>
              </div>
              <div className="flex flex-row gap-10 justify-center items-center mt-3">
                <FaRegHandPointRight className="text-lime-300 text-xl" />
                <h2 className="text-lg text-center text-white">
                  Personalised Readings Everyday
                </h2>
              </div>
              <div className="flex flex-row gap-10 justify-center items-center mt-3">
                <FaRegHandPointRight className="text-lime-300 text-xl " />
                <h2 className="text-lg text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-500">
                  AI horoscope in seconds
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center bg-white bg-opacity-10 rounded-2xl p-10 px-20 shadow-lg">
            <h2 className="text-2xl font-bold text-center text-white mb-4">
              Sign Up
            </h2>
            <h2 className="text-sm font-semibold text-center text-white mb-4">
              Enter your details to create an account
            </h2>

            <div className="mb-4 w-full">
              <input
                type="text"
                placeholder="Enter Username"
                value={userName}
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-black focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            <div className="mb-4 w-full">
              <input
                type="email"
                placeholder="Enter Email"
                value={userEmail}
                name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-black focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            <div className="mb-6 w-full">
              <input
                type="password"
                name="userPassword"
                placeholder="Create Password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-black focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            <div className="flex items-center justify-between mt-8 w-full">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-lime-300 text-black font-bold py-3 px-4 rounded-lg hover:bg-lime-400 focus:outline-none"
              >
                Sign Up
              </button>
            </div>
            <h1 className="mt-6 text-sm font-semibold text-white text-center">
              Or Sign up with
            </h1>
            <div className="mt-6 flex flex-row gap-3 justify-center items-center">
              <button className="w-1/2 bg-white bg-opacity-10 text-white border-2 font-bold border-gray-900 rounded-lg px-3 py-2 flex flex-row justify-center items-center gap-3">
                <FaGoogle />
                Google
              </button>
              <button className="w-1/2 bg-white bg-opacity-10 text-white border-2 font-bold border-gray-900 rounded-lg px-3 py-2 flex flex-row justify-center items-center gap-3">
                <FaApple />
                Apple
              </button>
            </div>
            <h1 className="mt-8 text-sm font-semibold text-white text-center">
              Already have an account? Login now
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
