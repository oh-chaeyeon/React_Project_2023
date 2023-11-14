import React from 'react';
import { dataDummy } from '../dataDummy';
import './ModalPage.css';

const ModalPage = ({ selectedCrewName }) => {
  const selectedCrew = dataDummy.find((crew) => crew.crewName === selectedCrewName);

  // Check if selectedCrew exists before accessing its properties
  if (!selectedCrew) {
    return (
      <div className="modal">
        <div className="modal-content">
          <p>Error: Crew not found</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="modal"> 
    <h2>{selectedCrew.crewName}</h2>
    <hr></hr>
    <div className="modal-container">
        <div className="modal-content">
            <p> <img id="img" src={selectedCrew.crewImg} alt={selectedCrew.crewName}></img> </p>
        </div>

        <div className="information"> 
          활동 내용 <br></br>
          지원 기간 <br></br>
          지원 자격 <br></br>
          가입비 <br></br>
          지원 방법 <br></br>
        </div>

         <div className="join">    
            {selectedCrew.activity_contents} <br></br>
            {selectedCrew.join_date} <br></br>
            {selectedCrew.qualification} <br></br>
            {selectedCrew.membershipFee} <br></br>
            {selectedCrew.applicationMethod} <br></br>
          </div>
    
      </div>
    </div> 
    
    <hr></hr>
    <p id="explanation"> {selectedCrew.explanation} </p> 
    </> 
  ); 
};


export default ModalPage;

