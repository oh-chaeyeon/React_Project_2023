import React from 'react';
import './CheckBoxList.css';

function CheckBoxList({ isChecked, setIsChecked }) {
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="checkBoxDiv">
            <div>
                <label className="switch">
                    <input
                        type="checkbox"
                        id="모집현황"
                        checked={isChecked}
                        onChange={toggleCheckbox}
                    />
                    <span className="slider"></span>
                </label>
                <label>
                    <span className="statusText">
                        {isChecked ? '모집중' : '전체'}
                    </span>
                </label>
            </div>
        </div>
    );
}

export default CheckBoxList;