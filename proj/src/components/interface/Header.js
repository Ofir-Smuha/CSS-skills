import React from 'react'
import styled from 'styled-components'

import arrow from 'assets/images/icons/down-arrow.png'
import home from 'assets/images/icons/home.png'

const Cotnainer = styled.div`
`;

const StatusNotification = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Status = styled.div`
  display: flex;
`;

const StatusTitle = styled.h3`
  font-size: 1.1rem;
`;

const StatusIcon = styled.div`
  background: url(${arrow}) center no-repeat;
  background-size: 10px 10px;
  width: 20px;
  margin-left: 5px;
`;

const BellIcon = styled.div`
  background: url(${home}) center no-repeat;
  background-size: 16px 16px;
  width: 20px;
  margin: 0 80px 0 50px;
`;

const Category = styled.div`

`;

const CategoryTitle = styled.h1`
  font-size: 2rem;
  margin-left: 100px;
`;

const Header = () => {
  return (
    <Cotnainer>
      <StatusNotification>
        <Status>
          <StatusTitle>Status: sale</StatusTitle>
          <StatusIcon/>
          <BellIcon/>
        </Status>
      </StatusNotification>
      <Category>
        <CategoryTitle>Chat</CategoryTitle>
      </Category>
    </Cotnainer>
  )
}

export default Header