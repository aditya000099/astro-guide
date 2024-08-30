import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AskAi from "./pages/AskAi";
import LoginPage from "./pages/LoginPage";
import BookSession from "./pages/BookSession";
import SignupPage from "./pages/SignUpPage";

const App = () => {
  return (
    <>
      <Router>
      
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/ai" element={<AskAi />} />
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/signup" element={<SignupPage />} />
            <Route exact path="/book" element={<BookSession />} />
          </Routes>
       
      </Router>
    </>
  );
};

export default App;
