import React, { useState } from "react";
import Navbar from "./navbar";
import './style/createExam.css'
import { useNavigate } from "react-router-dom";

function CreateExam() {
    const [examName, setExamName] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        //alert("Form submitted!");
        // Add code here to make API call to create user account
        navigate("/home/create-exam/exam-details");
    }
    return (
        <div>
            <Navbar />

            <div className="create">
                <h2>Give a name</h2>
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        id="name"
                        placeholder="Exam Name"
                        value={examName}
                        onChange={(e) => setExamName(e.target.value)}
                        required
                    />
                    <div className="submitb">
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CreateExam;