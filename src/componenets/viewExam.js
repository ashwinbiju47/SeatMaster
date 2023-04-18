import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from './navbar';
import './style/viewExam.css'

function ViewExam() {
    const location = useLocation();
    const exam = location.state.exam;

    return (
        <div className="viewExam">
            <Navbar />
            <div className="card2">
                <h2>{exam.name}</h2>
                <h3>Roll Number: {exam.rollNumber}</h3>
                <h3>Hall Number: {exam.hallNumber}</h3>
                <h3>Seat number: {exam.seatNumber}</h3>

                <button>VIEW ARRANGEMENT</button>
            </div>
        </div>
    )
}

export default ViewExam;
