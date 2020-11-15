import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const Hero = () => {
    const[sidebar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sidebar);
    return (
        <>
        <div className="navbar">
            <img src="images/war.png" alt="logo"/>
            <Link to='#' id="menu-bar1" className="menu-bars">
                <FaIcons.FaBars onClick={showSideBar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSideBar}>
                <li className="navbar-toggle">
                    <Link to="#" id="menu-bar2" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>  
        </>
    );
}

export default Hero;