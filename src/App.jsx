import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import UserForm from "./components/UserForm";
import QuizSection from "./components/QuizSection";
import Results from "./components/Results";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Products from "./components/Products";
import Unsubscribe from "./components/Unsubscribe";
import AdminLogin from "./components/AdminLogin.jsx";

import Admin from "./components/Admin.jsx";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-border">
          <Navbar />
          <Banner />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/userform" element={<UserForm />} />
            <Route path="/quiz" element={<QuizSection />} />
            <Route path="/results/:resultId" element={<Results />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} />

          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}
