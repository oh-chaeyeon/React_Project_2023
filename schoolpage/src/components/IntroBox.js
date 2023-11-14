import React, { useState } from 'react';
import './IntroBox.css';
import insta_logo from '../images/insta_logo.png';
import blog_logo from '../images/blog_logo.png';


function IntroBox({ crewData }) {
    const { intro_crewName, intro_crewImg, simple_intro, insta, blog } = crewData;

    

    const [isHovered, setHovered] = useState(false);

    const handleMouseOver = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className={`intro-crew-container ${isHovered ? 'hovered' : ''}`}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <div className="img-slide-container">
                <div className="overlay">
                    <div className="text">
                        <div className = "intro-simple"><p>{simple_intro}</p></div>
                        <a href={insta} target="_blank" rel="noopener noreferrer">
                            <img className="instagram" src={insta_logo} alt="Instagram Logo" />
                        </a>
                        <a href={blog} target="_blank" rel="noopener noreferrer">
                            <img className="blog" src={blog_logo} alt="Blog Logo" />
                        </a>
                    </div>
                </div>
                <img className="intro-crewImg" src={crewImg} alt={crewName} />
                <h3 className="crew-name-overlay">{crewName}</h3>
            </div>
        </div>
    );
}

export default IntroBox;
