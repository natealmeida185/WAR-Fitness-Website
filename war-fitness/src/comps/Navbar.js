import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Profile from './Profile';

const Hero = (props) => {
    const[sidebar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sidebar);
    return (
        <>
        <div className="navbar">
            <img src="images/war.png" alt="logo"/>
            <FaIcons.FaBars id="menu-bar1" className="menu-bars" onClick={showSideBar}/>  
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSideBar}>
                <li className="navbar-toggle" id="menu-bar2">
                    <AiIcons.AiOutlineClose className="menu-bars"/>
                </li>
                <div className="nav-text">
                    <img id="user-avatar" src={props.usersPhoto}></img>

                    <h5>Email:</h5>
                    <li>{props.email}</li>
                
                    <h5>Name:</h5>
                    <li>{props.usersName}</li>
                    
                    <h5>Gender:</h5>
                    <li>{props.usersGender}</li>
                    
                    <h5>Height:</h5>
                    <li>{props.usersHeight}<span> inches</span></li>

                    <h5>Weight:</h5>
                    <li>{props.usersWeight}<span> lbs</span></li>
                   
                    <h5>Experience Level:</h5>
                    <li>{props.usersExperience}</li>
                  
                    <h5>Fitness Goal:</h5>
                    <li>{props.usersGoal}</li>

                    <div className="nav-links">
                        <li>User Preferences</li>
                        <li onClick={props.handleLogout}>Logout</li>
                    </div>
                </div>
            </ul>
        </nav>
        <Profile usersName={props.usersName}/>  
        </>
    );
}

export default Hero;