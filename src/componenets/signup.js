import React, { useState } from "react";
import classes from './style/signup.module.css'
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from '../images/logo.svg';


function Signup() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const navigate = useNavigate();
    
    function handleSigninClick() {
        navigate("/signin");
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else {
            navigate("/signin");
            //alert("Form submitted!");
            // Add code here to make API call to create user account
        }
    }


    return (
        <div className={classes.signup}>
            <Logo className={classes.logo} />
            <div className={classes.card}>
                <h2 className={classes.intro}>Welcome to SeatMaster</h2>
                <h3 className={classes.intro2}>Register your account here</h3>

                <form onSubmit={handleSubmit}>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <button type="submit">REGISTER</button>
                    </div>
                </form>
            </div>

            <div className={classes.inorup}>
                <p>Already have an account?</p>
                <button id={classes.signinbutton} onClick={handleSigninClick}>Sign In</button>
            </div>
        </div>
    );
}

export default Signup;
