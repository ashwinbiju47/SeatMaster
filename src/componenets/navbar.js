import React from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';
import UserProfile from './userprofile';
import './style/navbar.css'

function Navbar() {
    const handleAboutClick = () => {
        alert("This is the About button.");
    };

    const handleGithubClick = () => {
        alert("This is the Github button.");
    };

    return (
        <nav>
            <Logo style={{ height: '20px' }} />

            <div className="buttons">
                <button onClick={handleAboutClick}>About</button>
                <button id='github' onClick={handleGithubClick}>Github</button>
            </div>

            <UserProfile />
        </nav>
    );
}

export default Navbar;
