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
    <div className="modal-container">
        <div className="modal-content">
            <p> <img id="img" src={selectedCrew.crewImg} alt={selectedCrew.crewName}></img> </p>
        </div>

        <div className="information">
            <p> 
                <span class="infor">활동 내용</span>  {selectedCrew.activity_contents} <br></br>
                <span class="infor">지원 기간</span>   {selectedCrew.join_date} <br></br>
                <span class="infor">지원 자격</span>   {selectedCrew.qualification} <br></br>
                <span class="infor">가입비</span>      {selectedCrew.membershipFee} <br></br>
                <span class="infor">지원 방법</span>   {selectedCrew.applicationMethod} <br></br>
            </p>
        </div>
    </div>
</div>
    <hr></hr>
    <p>
       {selectedCrew.explanation}
    </p>
    </>
  );
};

export default ModalPage;

