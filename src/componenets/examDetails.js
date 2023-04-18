import React from "react";
import Navbar from "./navbar";
import './style/ExamDetails.css'
import { useNavigate } from "react-router-dom";


function ExamDetails() {

    const navigate = useNavigate();

    const handleAddBatchClick = () => {
        alert('Add Batch button clicked');
    }

    const handleAddRoomsClick = () => {
        alert('Add Rooms button clicked');
    }

    // const handleAddInvigilatorsClick = () => {
    //     alert('Add Invigilators button clicked');
    // }

    const handleGenerateLayoutClick = () => {
        alert('Generate Layout button clicked');
    }

    const handlePublishClick = () => {
        alert('Exam has been Published');
        navigate("/home");

    }

    return (
        <div>
            <Navbar />
            <div className="examDetails">
                <h2>Exam Name</h2>

                <button onClick={handleAddBatchClick}>+ ADD BATCH</button>
                <button onClick={handleAddRoomsClick}>+ ADD ROOMS</button>
                {/* <button onClick={handleAddInvigilatorsClick}>+ ADD INVIGILATORS</button> */}

                <button id="section21" onClick={handleGenerateLayoutClick}>GENERATE LAYOUT</button>
                <button id="section22" onClick={handlePublishClick}>PUBLISH</button>
            </div>
        </div>
    )
}

export default ExamDetails;
