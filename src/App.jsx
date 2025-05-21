import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Comparator from "./pages/Comparator";
import Summarizer from "./pages/Summarizer";
import Page1 from "./pages/Page1";
import ReviewPage from "./pages/Review";
import PrivateRoute from "./components/PrivateRoute"; 
import About from "./pages/About";


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 120px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/comparator" element={<Comparator />} />
          <Route path="/summarizer" element={<Summarizer />} />
          <Route path="/page1" element={<Page1 />} />
          <Route
            path="/review"
            element={
              <PrivateRoute>
                <ReviewPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
