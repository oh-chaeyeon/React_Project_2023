import React, { useState, useEffect } from 'react';
import TopMenuBar from "../components/TopMenuBar";
import JoinBox from "../components/JoinBox"
import {dataDummy} from '../dataDummy.js';
import './JoinPage.css';
import CheckBoxList from "../components/CheckBoxList.js";
import Searching from "../components/Searching.js";
import PopupModal from '../components/Modal.js';
import Filter from "../components/Filter.js";

function JoinPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [filteredCrews, setFilteredCrews] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCrewName, setSelectedCrewName] = useState(null);
    const [filters, setFilters] = useState({
        교내동아리: false,
        연합동아리: false,
        소모임: false
    });


    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const handleModal = (crewName) => {
        setSelectedCrewName(crewName);
        setModalOpen(!modalOpen); 
    }
    useEffect(() => {
        // 검색어가 비어 있을 때는 모든 동아리 정보를 출력합니다.
        let filteredData = dataDummy;

        // 검색어와 crewName을 비교하여 일치하는 동아리 정보를 필터링합니다.
        if (searchTerm !== '') {
            filteredData = filteredData.filter((crew) =>
                crew.crewName.includes(searchTerm)
            );
        }

        // checkbox가 체크되어 있을 때 joining 값이 true인 동아리만 필터링합니다.
        if (isChecked) {
            filteredData = filteredData.filter((crew) => crew.joining);
        }

        // Filter 컴포넌트의 체크박스 상태를 반영하여 필터링합니다.
        const filterKeys = Object.keys(filters).filter(key => filters[key]);
        if (filterKeys.length > 0) {
            filteredData = filteredData.filter(crew =>
            filterKeys.includes(crew.filter)
            );
        }

        setFilteredCrews(filteredData);
    }, [searchTerm, isChecked, filters]);

    return (
        <>
            <TopMenuBar/>
            <div className="pageTitle">동아리 지원</div>
            <div className="middle">               
                <Searching onSearch={handleSearch}/>
                <Filter setFilters={setFilters}/>
                <CheckBoxList isChecked={isChecked} setIsChecked={setIsChecked}/>
            </div>

            <div className="crews-container">
                {
                    filteredCrews.map((crew, index)=> {
                        return (
                            <div key={index}>
                            <JoinBox 
                            
                                key={index}
                                crewName={crew.crewName}
                                crewImg={crew.crewImg}
                                join_date={crew.join_date}
                                handleModal={() => handleModal(crew.crewName)}

                            />
                            </div>
                        )
                    })
                }

            </div>
            <PopupModal modalOpen={modalOpen} handleModal={handleModal} selectedCrewName={selectedCrewName}/>
        </>
    );
}

export default JoinPage;