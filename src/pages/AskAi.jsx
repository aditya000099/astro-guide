import React, { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import Header from "../components/Header";
import styles from "./AskAi.module.css"; // Import the CSS module
import { toast, ToastContainer } from "react-toastify";

const AskAi = () => {
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const endOfChatRef = useRef(null); // Ref for the last chat message

  // Load date of birth and chat history from localStorage
  useEffect(() => {
    const savedDate = localStorage.getItem("dateOfBirth");
    // const savedChats = JSON.parse(localStorage.getItem("chatHistory")) || [];
    if (savedDate) setDate(savedDate);
    // setChatHistory(savedChats);
  }, []);

  // Save date of birth and chat history to localStorage
  useEffect(() => {
    localStorage.setItem("dateOfBirth", date);
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [date, chatHistory]);

  // Scroll to the latest chat message
  useEffect(() => {
    if (endOfChatRef.current) {
      endOfChatRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [chatHistory]);

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleDateChange = (e) => setDate(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (date) {
      const requestBody = {
        prompt: `You are a professional astrologer. Reply to this question with just the answer and no greetings or formalities in short like 2 lines, just the answer in a paragraph: ${query} for today for people born on ${date}`,
      };
      try {
        const res = await fetch("https://astroaibackend.onrender.com/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });
        const result = await res.json();
        const answer = result.answer || "No answer received.";
        setChatHistory([{ query, answer, date }, ...chatHistory]);
        setQuery(""); // Clear input after submission
      } catch (error) {
        console.error("Error fetching chat:", error);
      }
    } else {
      toast.error("Please select a date.");
    }
  };
//   const [hasGpu, setHasGpu] = useState(false);

//   useEffect(() => {
//     setHasGpu(hasWebGL());
//   }, []);

//   function hasWebGL() {
//     try {
//       const canvas = document.createElement("canvas");
//       return !!(
//         window.WebGLRenderingContext &&
//         (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
//       );
//     } catch (e) {
//       return false;
//     }
//   }

  return (
    <div className="w-[98.5vw] overflow-x-hidden">
      <div className="bg-black w-full min-h-screen flex flex-col items-center justify-center">
        <div className="bg-black flex flex-row justify-center items-center gap-40 w-full max-w-6xl p-4">
        <ToastContainer />
          <div className="flex flex-col items-center p-4 justify-center font-black text-5xl">
            <div>
              Astro<span className="text-lime-300">Ai</span>
            </div>
            <h1 className="text-2xl mt-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-500">
              Get horoscope in seconds
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full bg-black">
          <Spline
            scene="https://prod.spline.design/9rB92fOsQmke9hQu/scene.splinecode"
            className="h-4/5 max-h-[30rem] w-full"
          />
          <div className="flex flex-col w-full max-w-4xl px-4 py-4 space-y-4 z-10">
            <div className="w-full flex items-center">
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                className="rounded-3xl border-white shadow-lg w-full h-16 p-4 font-bold text-white outline-none placeholder-white"
                placeholder="Ask a question..."
              />
              <input
                type="date"
                value={date}
                onChange={handleDateChange}
                className="rounded-3xl border-white shadow-lg h-16 p-4 font-bold text-white outline-none ml-4 w-1/4"
              />
              <button
                onClick={handleSubmit}
                className="w-16 h-16 rounded-full bg-lime-300 text-black font-bold text-3xl text-center ml-4"
              ></button>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-4 space-y-4 overflow-auto">
              <div className="space-y-2">
                {chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    className="flex flex-col space-y-2"
                    ref={index === 0 ? endOfChatRef : null}
                  >
                    <div className="flex items-start">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-black border border-white text-white font-bold rounded-full flex items-center justify-center p-5">
                          Me
                        </div>
                        <div className="bg-lime-300 text-black p-3 rounded-2xl max-w-xs font-semibold">
                          <p>{chat.query}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end justify-end">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-black text-white border-2 border-purple-800 rounded-full flex items-center justify-center font-bold p-5">
                          AI
                        </div>
                        <div className="bg-black text-white p-3 rounded-2xl max-w-[28rem] font-semibold">
                          <p>{chat.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskAi;
