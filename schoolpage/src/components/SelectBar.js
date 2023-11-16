// SelectBar.js

import { useState } from 'react';
import styled from 'styled-components';
import './SelectBar.css'; // SelectBar.css 파일 import
import React from 'react';
import IntroBox from './IntroBox';
import { dataDummy } from '../dataDummy';




// TabMenu 컴포넌트 정의
const TabMenu = styled.ul`
  background-color: #4169E1;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none; 
  margin-bottom: 7rem;
  margin-top: -280px;
`;

const Desc = styled.div`//동아리정보
  text-align: center;
  margin-top: 200px;
  display: flex;
  flex-wrap: wrap; /* 필요에 따라 여러 줄에 걸쳐 나타나도록 설정 */
  justify-content: center; /* 항목을 가운데 정렬 */
  margin-top: 0.2vwn;
`;

export const Tab = ({ filter }) => {
const [currentTab, clickTab] = useState(0);

const menuArr = [
  { name: '공연예술', info: 'perform' },
  { name: '종교분과', info: 'religion' },
  { name: '학술분과', info: 'academic' },
  { name: '체육분과', info: 'athletic' },
  { name: '평면예술', info: 'art' },
  { name: '취미봉사', info: 'hobby' },
];


//선택된 탭 변경 함수
const selectMenuHandler = (index) => {
  clickTab(index);
};


//컴포넌트 렌더링
return (
  <>
    {filter === '교내동아리' && (
      <div>
        <TabMenu>
          {menuArr.map((el, index) => (
            <li className={index === currentTab ? 'submenu focused' : 'submenu'}
              onClick={() => selectMenuHandler(index)}
              key={index}
            >
              {el.name}
            </li>
          ))}
        </TabMenu>
      </div>
    )}
      <Desc>
  {dataDummy
    .filter((item) => {
      if (filter === '교내동아리') {
        return (
          item.filter === filter &&
          item.info === menuArr[currentTab].info
        );
      } else if (filter === '연합동아리') {
        return (
          item.filter === filter
        );
      } else if (filter === '소모임') {
        return (
          item.filter === filter
        );
      }
      return false;
    })
    .map((crewData, index) => (
      <IntroBox key={index} crewData={crewData} />
    ))}
</Desc>

  </>
);

};