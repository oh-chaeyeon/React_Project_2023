// IntroBox.js
import React from 'react';
import './IntroBox.css';

function IntroBox({ crewData }) {
    const { intro_crewName, intro_crewImg, simple_intro, insta, blog } = crewData;

    return (
        <div className="crew-container">
            <div className="img-slide-container">
                <img className="intro_crewImg" src={intro_crewImg} alt={intro_crewName} />
                <div className="overlay">
                    <div className="text">
                        <p>{simple_intro}</p>
                        <a href={insta} target="_blank" rel="noopener noreferrer"> 
                            <img className="instagram" src="/insta_logo.png" alt="Instagram Logo" />
                        </a>
                        <a href={blog} target="_blank" rel="noopener noreferrer"> 
                            <img className="blog" src="/blog_logo.png" alt="Blog Logo" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="intro_crewName">{intro_crewName}</div>
        </div>
    );
}

export default IntroBox;
