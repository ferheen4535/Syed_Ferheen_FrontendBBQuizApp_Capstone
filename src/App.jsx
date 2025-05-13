import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import Footer from "./components/Footer.jsx";
import UserForm from "./components/UserForm.jsx";
import QuizSection from "./components/QuizSection.jsx";
import Results from "./components/Results.jsx";
import Banner from "./components/Banner.jsx";
import Profile from "./components/Profile.jsx";
import Products from "./components/Products.jsx";
// import Unsubscribe from "./components/Unsubscribe.jsx";

import "./App.css";

function App() {
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
            <Route path="/banner" element={<Banner />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;




// sources///

// https://wpdean.com/bootstrap-navbar/  //
// https://www.geeksforgeeks.org/how-to-make-responsive-navbar-menu-in-css/  //
// https://cssgradient.io/  //