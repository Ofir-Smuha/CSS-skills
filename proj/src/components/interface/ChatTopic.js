import React from 'react'
import styled from 'styled-components'

const TopicContainer = styled.div`
  margin-bottom: 1px solid lightgrey;
`;

const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
`;

const From = styled.h4`
  font-size: 0.8rem;
  margin: 0;
`;



const ChatTopic = () => {
  return (
    <TopicContainer>
      <Title>Gold Coast</Title>
      <From>From: Hali</From>
    </TopicContainer>
  )
};

export default ChatTopic