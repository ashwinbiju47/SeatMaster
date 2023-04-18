import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./style/signin.module.css"
import { ReactComponent as Logo } from '../images/logo.svg';

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        //alert("Form submitted!");
        // Add code here to make API call to authenticate user
        navigate("/home");
    }

    function handleSignupClick() {
        navigate("/");
    }

    return (
        <div className={classes.signIn}>
            <Logo className={classes.logo} />
            <div className={classes.card}>
                <h2 className={classes.intro}>Welcome back to SeatMaster</h2>
                <h3 className={classes.intro2}>Login here!</h3>

                <form onSubmit={handleSubmit}>
                    <div className={classes.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        <button type="submit">Sign In</button>
                    </div>
                </form>
            </div>
            <div className={classes.inorup}>
                <p>Don't have an account?</p>
                <button id={classes.signupbutton} onClick={handleSignupClick}>Sign Up</button>
            </div>
        </div>
    );
}

export default Signin;
