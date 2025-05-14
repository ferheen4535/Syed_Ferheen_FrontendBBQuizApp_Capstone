import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/UserForm');   //change to UserForm 
  };

  return (
    <div className="intro-container">
    <div>
      <p><b>Find The Right Badmaash Beards Product For You</b> <br /> <br />
         Discover the perfect products tailored to elevate your beard 
        care routine. <br /> 
         Answer a few simple questions 
        and let us guide you to the perfect Badmaash products for you.
       </p>
      <button onClick={handleStart}>Start Quiz</button>
      </div>
    </div>
  );
}