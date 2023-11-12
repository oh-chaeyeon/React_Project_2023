// SelectBar.js

import { useState } from 'react';
import styled from 'styled-components';
import './SelectBar.css'; // SelectBar.css 파일 import
import React from 'react';
import IntroBox from './IntroBox';
import { dataDummy } from '../dataDummy';

// TabMenu 스타일드 컴포넌트 정의

const TabMenu = styled.ul`
  background-color: #dcdcdc;
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

export const Tab = () => {
    // 현재 선택된 탭을 관리하는 state와 해당 state를 업데이트하는 함수
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '공연예술', content: '공연예술친구들' },
    { name: '종교분과', content: '종교분과친구들box' },
    { name: '학술분과', content: 'box' },
    { name: '체육분과', content: 'component box' },
    { name: '평면예술', content: 'compo box' },
    { name: '취미봉사', content: 'box!!!' },
  ];

  //선택된 탭 변경하는 함수
  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  //컴포넌트 렌더링
  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((el, index) => (
            <li className={index === currentTab ? 'submenu focused' : 'submenu'}
              onClick={() => selectMenuHandler(index)}
              key={index}
             >{el.name}</li>
            ))}
        </TabMenu>
        </div>
        <Desc>
            {dataDummy.map((crewData, index) => (
                <IntroBox key={index} crewData={crewData} />
            ))}
        </Desc>
      
    </>
  );
};