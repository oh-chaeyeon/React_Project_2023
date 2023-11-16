import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown({ setView, onFilterChange }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (filter) => {
    onFilterChange(filter);
    setView(false);
    setSelectedItem(filter);
  };

  return (
    <div className="dropdown-container">
      <li
        className={selectedItem === '교내동아리' ? 'selected' : ''}
        onClick={() => handleClick('교내동아리')}
      >
        교내동아리 소개
      </li>
      <li
        className={selectedItem === '연합동아리' ? 'selected' : ''}
        onClick={() => handleClick('연합동아리')}
      >
        연합동아리 소개
      </li>
      <li
        className={selectedItem === '소모임' ? 'selected' : ''}
        onClick={() => handleClick('소모임')}
      >
        소모임 소개
      </li>
    </div>
  );
}

export default Dropdown;