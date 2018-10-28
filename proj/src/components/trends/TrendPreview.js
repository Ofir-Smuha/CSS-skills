import React from 'react'
import styled from 'styled-components'

const Trend = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  border-bottom: 1px solid #F8F8FA;
`;

const TrendPresentation = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

const TrendName = styled.div`
  font-size: 1.5rem;
  color: #959FB9;
  margin-left: 20px;
`;

const TrendInfo = styled.div`
  display: flex;
  align-items: center;
    margin-right: 50px;
`;

const TrendDate = styled(TrendName)`
  font-size: 0.9rem;
`;

const TrendRate = styled(TrendName)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FFFAC9;
  font-size: 1rem;
  margin-left: 20px;
`;


const TrendPhoto = styled.div`
  background: url(${props => props.img}) center no-repeat;
  background-size: cover;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  `;


const TrendsPreview = ({trend}) => {
  return (
    <Trend>
      <TrendPresentation>
        <TrendPhoto img={trend.img}/>
        <TrendName>{trend.title}</TrendName>
      </TrendPresentation>
      <TrendInfo>
        <TrendDate>{trend.date}</TrendDate>
        <TrendRate>{trend.rate}</TrendRate>
      </TrendInfo>
    </Trend>
  )
};

export default TrendsPreview