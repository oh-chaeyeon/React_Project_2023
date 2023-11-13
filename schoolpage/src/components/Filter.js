import React, { useState, useEffect } from 'react';
import './Filter.css';

function Filter({ setFilters }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [filters, setLocalFilters] = useState({
        교내동아리: false,
        연합동아리: false,
        소모임: false
    });

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setLocalFilters(prevFilters => ({
            ...prevFilters,
            [name]: checked
        }));
    };

    useEffect(() => {
        setFilters(filters);
    }, [filters, setFilters]);

    return (
        <div className="filter">
            <button onClick={toggleDropdown} className="dropbtn">필터</button>
            <div id="myDropdown" className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                <label><input type="checkbox" name="교내동아리" checked={filters.교내동아리} onChange={handleCheckboxChange}/>교내동아리</label>
                <label><input type="checkbox" name="연합동아리" checked={filters.연합동아리} onChange={handleCheckboxChange}/>연합동아리</label>
                <label><input type="checkbox" name="소모임" checked={filters.소모임} onChange={handleCheckboxChange}/>소모임</label>
            </div>
        </div>
    )
}

export default Filter;