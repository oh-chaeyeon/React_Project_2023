import React from 'react';
import './IntroBox.css';
import insta_logo from '../images/insta_logo.png';
import blog_logo from '../images/blog_logo.png';

function IntroBox({ crewData }) {
    const { crewName, crewImg, simple_intro, insta, blog } = crewData;

    return (
        <div className="intro-crew-container">
            <div className="img-slide-container">
                <div className="crew-name-overlay">{crewName}</div>
                <img className="intro-crewImg" src={crewImg} alt={crewName} />
                <div className="overlay">
                    <div className="text">
                        <p className = "intro-simple">{simple_intro}</p>
                        <a href={insta} target="_blank" rel="noopener noreferrer"> 
                            <img className="instagram" src={insta_logo} alt="Instagram Logo" />
                        </a>
                        <a href={blog} target="_blank" rel="noopener noreferrer"> 
                            <img className="blog" src={blog_logo} alt="Blog Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroBox;