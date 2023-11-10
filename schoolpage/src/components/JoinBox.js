import './JoinBox.css';
import React from 'react';

function JoinBox({crewName, crewImg, join_date}) {
    return (
        <div className="crew-container">
            <img className="crewImg" src={crewImg} alt="동아리사진"/>
            <div className="crewName">{crewName}</div>
            <div className="joinDate">
                지원기간: {join_date}
            </div>
        </div>
    )
}

export default JoinBox;