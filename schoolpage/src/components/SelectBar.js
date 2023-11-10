// Selectbar.js

import { useState } from 'react';
import styled from 'styled-components';
import './SelectBar.css'; // SelectBar.css 파일 import


const Container = styled.div`
  margin-bottom: 7rem;
  margin-top: 10px;
`;

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  margin-top: 10px;
`;

export const Tab = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '공연예술', content: '공연예술친구들' },
    { name: '종교분과', content: '종교분과친구들box' },
    { name: '학술분과', content: 'box' },
    { name: '학술분과', content: 'component box' },
    { name: '학술분과', content: 'compo box' },
    { name: '학술분과', content: 'box!!!' },
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  return (
    <Container>
      <TabMenu>
        {menuArr.map((el, index) => (
          <li
            className={index === currentTab ? 'submenu focused' : 'submenu'}
            onClick={() => selectMenuHandler(index)}
            key={index}
          >
            {el.name}
          </li>
        ))}
      </TabMenu>
      <Desc>
        <p>{menuArr[currentTab].content}</p>
      </Desc>
    </Container>
  );
};

//본문
const Desc = styled.div`
  text-align: center;
`;