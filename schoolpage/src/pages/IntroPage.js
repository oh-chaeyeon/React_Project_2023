import React, { useState, useEffect } from 'react';
import TopMenuBar from "../components/TopMenuBar";
import { dataDummy } from '../dataDummy.js';
import './IntroPage.css';
import Dropdown from "../components/Dropdown";
import {Tab} from '../components/SelectBar.js';


function IntroPage() {
    const [clubInfo, setClubInfo] = useState([]);
    const [view, setView] = useState(false); 
    
    
    useEffect(() => {
      setClubInfo(dataDummy);
    }, []);
  
    return (
      <>
        <TopMenuBar />
  
        <div className="centered-container">
          <ul onClick={() => setView(!view)}>
            <span className="emphasis-text">동아리 소개 페이지</span> {view ? '⌃' : '⌄'}
            {view && <Dropdown />}
          </ul>
        </div>
  
        <div className="content-container">
          <Tab />
        </div>
      </>
    );
  }
  
  export default IntroPage;