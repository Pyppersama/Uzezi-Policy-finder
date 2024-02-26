import React, {useState} from 'react';
import './Nav.css'
import logo from '../Assets/navlogo.PNG'
import { Link } from "react-router-dom";


const Nav = () => {
    const [isOpen, SetIsOpen] = useState(true);        //useState Hook declaration of my menu bar

    const toggleMenu = () => {                          //a function to change the state
        SetIsOpen(!isOpen);
    }

    return (
        <nav>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <div className="navbar">
                <div className='nav-menu' onClick={toggleMenu}>
                    <h3>MENU</h3>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/PolicyFinder">POLICY FINDER</Link></li>
                    <li><Link to="/">CONTACT US</Link></li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav;