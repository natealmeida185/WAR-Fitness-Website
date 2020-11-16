import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Preferences from './Preferences';

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
                    <li>{props.usersPhoto}</li>
                    <li>{props.email}</li>
                    <li>{props.usersName}</li>
                    <li>{props.usersAge}</li>
                    <li>{props.usersGender}</li>
                    <li>{props.usersWeight}</li>
                    <li>{props.usersExperience}</li>
                    <li>{props.usersGoal}</li>
                    <div className="nav-links">
                        <li component={Preferences}>Preferences</li>
                        <li onClick={props.handleLogout}>Logout</li>
                    </div>
                </div>
            </ul>
        </nav>  
        </>
    );
}

export default Hero;