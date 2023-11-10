// Searching.js
import React, { useState } from 'react';
import './Searching.css';

function Searching({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm); // 검색어를 부모 컴포넌트로 전달
    };

    const handleKeyDown = (e) => {
        // 엔터키(키 코드 13)를 누르면 검색 함수를 호출합니다.
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown} // 엔터키 처리
            />
            <button className="search-button" onClick={handleSearch}>검색</button>
        </div>
    );
}

export default Searching;