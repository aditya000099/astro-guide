import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AskAi from "./pages/AskAi";

const App = () => {
  return (
    <>
      <Router>
      
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/ai" element={<AskAi />} />
          </Routes>
       
      </Router>
    </>
  );
};

export default App;
