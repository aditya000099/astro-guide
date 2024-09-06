import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AskAi from "./pages/AskAi";
import LoginPage from "./pages/LoginPage";
import BookSession from "./pages/BookSession";
import SignupPage from "./pages/SignUpPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentError from "./pages/PaymentError";

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
            <Route exact path="/success" element={<PaymentSuccess />} />
            <Route exact path="/cancel" element={<PaymentError />} />
          </Routes>
       
      </Router>
    </>
  );
};

export default App;
