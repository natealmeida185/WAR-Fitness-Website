import React from 'react';
import Hero from './Hero';

const Profile = () => {
    return (
        <section className="profile-section">
            <Hero />
            <div className="profile-info">
                <h1>User Profile</h1>
            </div>
        </section>
    )
}

export default Profile;