import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './componenets/signin';
import Signup from './componenets/signup';
import Homepage from './componenets/homepage';
import CreateExam from './componenets/createExam';
import ViewExam from './componenets/viewExam';
import ExamDetails from './componenets/examDetails';
import "./fonts/Poppins/Poppins-Regular.ttf";
import "./fonts/Poppins/Poppins-Italic.ttf";
import "./fonts/Poppins/Poppins-Bold.ttf";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin"  element={<Signin />} />
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/home/create-exam" element={< CreateExam />} />
        <Route path="/home/create-exam/exam-details" element={< ExamDetails />} />
        <Route path="/home/view-exam" element={< ViewExam />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
