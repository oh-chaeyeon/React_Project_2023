import React, { useState, useEffect } from 'react';
import TopMenuBar from "../components/TopMenuBar";
import { dataDummy } from '../dataDummy.js';
import './IntroPage.css';
import Dropdown from "../components/Dropdown";
import {Tab} from '../components/SelectBar.js';


function IntroPage() {
    const [Info, setInfo] = useState([]);
    const [view, setView] = useState(false); 
    const [filter, setFilter] = useState("교내동아리");
    
    
    const handleFilterChange = (selectedFilter) => {
      setFilter(selectedFilter);
    };

    useEffect(() => {
      const filteredData = dataDummy.filter((item) => item.filter === filter);
      setInfo(filteredData);
    }, [filter]);
  
    return (
      <>
        <TopMenuBar />
  
        <div className="centered-container">
          <ul onClick={() => setView(!view)}>
            <span className="emphasis-text">{filter} </span> {view ? '⌃' : '⌄'}
            {view && <Dropdown setView={setView} onFilterChange={handleFilterChange} />}
          </ul>
        </div>
  
        
        <div className="content-container">
          {filter && <Tab filter={filter} Info={Info}/>}
        </div>
      </>
    );
  }
  
  export default IntroPage;