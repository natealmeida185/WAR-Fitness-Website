import React from 'react';
import Profile from './Profile';

const Hero = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav>
                <img src="images/war.png" alt="logo"/>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );  
};

export default Hero;