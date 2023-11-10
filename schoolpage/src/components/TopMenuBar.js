import React from 'react';
import homeImage from "../images/home.png";
import './TopMenuBar.css';
import { Link } from 'react-router-dom';

function TopMenuBar() {
    return (
        <div className="header">
            <Link to="/">
                <img src={homeImage} id="home" alt="로고"/>
            </Link>
            <button type="button" id="intro1">동아리 소개</button>   
            <Link to="/join"><button type="button" id="join1">동아리 지원</button></Link>
        </div>
    );
}

export default TopMenuBar;