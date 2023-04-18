import React, { useState } from "react";
import Navbar from './navbar';
// import SearchBar from './searchbar';
import './style/homepage.css'
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const [exams] = useState([
        { name: "Exam 1", rollNumber: "1234", hallNumber: "A1", seatNumber: "1" },
        { name: "Exam 2", rollNumber: "5678", hallNumber: "B2", seatNumber: "2" },
        { name: "Exam 3", rollNumber: "9012", hallNumber: "C3", seatNumber: "3" },
    ]);

    const navigate = useNavigate();

    const handleCreateExamClick = () => {
        // Navigate to the exam details page
        navigate('/home/create-exam');
    }

    const handleViewExamClick = (exam) => {
        // Navigate to the exam view page and pass the selected exam as a prop
        navigate('/home/view-exam', { state: { exam } });
    }


    const renderExamCards = () => {
        return exams.map((exam, index) => (
            <div className="Ecard" key={index}>
                <h3>{exam.name}</h3>
                <button onClick={() => handleViewExamClick(exam)}>CLICK TO VIEW</button>
            </div>
        ));
    }


    return (
        <div>
            <Navbar style={{ margin: '0px' }} />
            {/* <SearchBar /> */}

            <div className="quotes">
                <h2 id="arrange">Arrange <span id="exam">Exam</span> Seating </h2>
                <h2 id="seamlesly">Seamlesly!</h2>
                <p>"Say goodbye to the hassle of exam seating arrangements - streamline the process with our intuitive generator.</p>
                <p id="p2">Save time, reduce stress, and ensure fairness with ease."</p>
            </div>

            <div className="card">
                <h3>Create New Exam</h3>
                <button id="create" onClick={handleCreateExamClick}>CLICK TO CREATE</button>
            </div>

            <div className="yourExams">
                <p>Your exams</p>
                {/* Render all the created exams in a scrollable container */}
                <div className="exam-container">
                    {renderExamCards()}
                </div>
            </div>
        </div>
    );
}

export default Homepage;
