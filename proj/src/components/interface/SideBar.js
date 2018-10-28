import React from 'react'
import styled from 'styled-components'

import photo from 'assets/images/details.jpeg';
import arrow from 'assets/images/icons/down-arrow.png'
import home from 'assets/images/icons/home.png'

const Container = styled.div`
  width: 250px;
  height: 100%;
  background-color: #D4D6F0
  display: flex;
  flex-direction: column;
`;

const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`;

const UserPhoto = styled.div`
  background: url(${photo}) center no-repeat;
  background-size: cover;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-top: 40px;
`;

const UserName = styled.h1`
  font-size: 1.1rem;
  &::after {
    background: url(${arrow}) center no-repeat;
    background-size: 28px 28px;
    width: 28px;
    height: 28px;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  margin-left: 20px;
`;

const CategoryName = styled.h3`
  font-size: 0.9rem;
  color: #A1ABBD;
  font-weight: 400;
  margin-left: 30px;
  margin-bottom: 30px;
  margin: 0;
`;

const CategoryIcon = styled.div`
  background: url(${home}) center no-repeat;
  background-size: 15px 15px;
  width: 15px;
  height: 15px;
  margin-right: 20px;
`;

const SideBar = () => {
  return(
    <Container>
      <UserDetails>
        <UserPhoto/>
        <UserName>Jimi Hendrix</UserName>
      </UserDetails>
      <Category>
        <CategoryIcon/>
        <CategoryName>PROPERTIES</CategoryName>
      </Category>
      <Category>
        <CategoryIcon/>
        <CategoryName>CHAT</CategoryName>
      </Category>
      <Category>
        <CategoryIcon/>
        <CategoryName>CALENDAR</CategoryName>
      </Category>
      <Category>
        <CategoryIcon/>
        <CategoryName>OFFERS</CategoryName>
      </Category>
      <Category>
        <CategoryIcon/>
        <CategoryName>DOCUMENTS</CategoryName>
      </Category>
      <Category>
        <CategoryIcon/>
        <CategoryName>SETTINGS</CategoryName>
      </Category>
    </Container>
  )
};

export default SideBar