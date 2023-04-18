import React, { useState, useEffect } from 'react';
import './style/userprofile.css'
function UserProfile(props) {
    const [userProfilePic, setUserProfilePic] = useState(null);
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        // Replace this with your API call
        //alert("API call to fetch user profile picture and name");

        // Set the userProfilePic and userName state with the response from the API
        setUserProfilePic("../images/dp.png");
        setUserName("User Name");
    }, []);

    return (
        <div className='userProfile'>
            <img src={userProfilePic} alt="User Profile" />
            <h3>{userName}</h3>
        </div>
    );
}

export default UserProfile;
