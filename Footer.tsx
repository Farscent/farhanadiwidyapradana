import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaKaggle } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>Contact: farhanadiwidya@gmail.com</p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/farhan-adiwidya-pradana-44181b320/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Farscent" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/farhnnad1/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.kaggle.com/farhanadiwidyap" target="_blank" rel="noopener noreferrer">
                    <FaKaggle />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
