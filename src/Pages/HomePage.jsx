import React from 'react';
import './Homepage.css'
import HeroImage from '../Assets/heroimage.webp'
import { Link } from 'react-router-dom';


const HomePage = () => {

    return (
        <main>
            <div className="main">
                <h1>Welcome to UZEZI-HUB</h1>
                <h3>-Your One Stop Destination for Insurance</h3>

                <h2>Find the Perfect Insurance Policy for your Property in just a few clicks</h2>
                <Link to="/PolicyFinder">Get Started Now</Link>
            </div>
        </main>
    )
};

export default HomePage;