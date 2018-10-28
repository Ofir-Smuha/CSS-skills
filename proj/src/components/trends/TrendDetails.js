import React from 'react';
import styled from 'styled-components';

import trendsIcon from 'assets/images/icons/trends.png';
import detailsImage from 'assets/images/details.jpeg';
import squareIcon from 'assets/images/icons/square.png';
import paperPlane from 'assets/images/icons/paper-plane.png'

const DetailsContainer = styled.div`
  position: relative;
  height: 700px;
  width: 450px;
  background-color: #8378D0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 8px 39px -1px rgba(145,140,145,1);
`

const Title = styled.h1`
  font-size: 2.5rem;
  display: inline-block;
  color: #fff;
  font-weight: 100;
  margin-top: 50px;
  margin-bottom: 35px;
`

const StyledTitle = styled(Title)`
    font-weight: bold;
    margin-right: 10px;
    background: url(${trendsIcon}) bottom no-repeat;
 
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const TrendImage = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background: url(${detailsImage}) center no-repeat;
  background-size: cover;
  margin-bottom: 30px;
  position: relative;
  box-shadow: 2px 8px 39px -1px rgba(145,140,145,1);
`

const Notification = styled.div`
  position: absolute;
  bottom: -5%;
  right: 10%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  background-color: #F94E7E;
  box-shadow: 2px 8px 39px -1px rgba(145,140,145,1);
`

const TrendTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 30px;
`

const Square = styled.div`
  background: url(${squareIcon}) center no-repeat;
  width: 50px;
  height: 50px;
  margin-bottom: 30px;
`

const Date = styled.h1`
  color #fff;
  font-size: 0.8rem;
  margin: 0;
`

const Day = styled(Date)`
  font-size: 2rem;
  margin-bottom: 5px;
`

const SendButton = styled.div`
  position: absolute;
  bottom: -55px;
  width: 110px;
  height: 110px;
  background-color: #F96455;
  border-radius: 50%;
  background-image: url(${paperPlane});
  background-repeat: no-repeat;
  background-position: center; 
  background-size: 40px 40px;
  box-shadow: 2px 8px 39px -1px rgba(145,140,145,1);
  cursor: pointer;
`

const TrendsDetails = () => {
  return (
    <DetailsContainer>
      <Title><StyledTitle>TOP</StyledTitle>TRENDS</Title>
      <InfoContainer>
        <TrendImage><Notification>1</Notification></TrendImage>
        <TrendTitle>ARROW S4</TrendTitle>
        <Square/>
        <Day>18</Day>
        <Date>NOV 2015</Date>
      </InfoContainer>
      <SendButton></SendButton>
    </DetailsContainer>
  )
}

export default TrendsDetails