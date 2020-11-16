import React from 'react';
import Dropdown1 from './Dropdown1';

const Profile = (props) => {
    return (
        <section className="profile-section">
            <div className="workout-dashboard">
                <h1>{props.usersName}</h1>
            </div>

            <div className="container">
                <Dropdown1 />
            </div>
        </section>
    )
}

export default Profile;