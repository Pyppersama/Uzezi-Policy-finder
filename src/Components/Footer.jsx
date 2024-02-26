import React from 'react';
import './Footer.css'


const Footer = () => {
    
    return (
        <footer>
            <div className="footer">
                <ul className="footer-nav">
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Policies</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Disclaimer</a></li>
                </ul>
                <ul className="footer-socials">
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">X</a></li>
                </ul>
                
            </div>
            <ul className="footer-info">
                <li><a href="#">&copy; CodeWithUzezi 2024</a></li>
            </ul>
        </footer>
    )
};

export default Footer;