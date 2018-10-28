import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
  width: 385px;
  height: 70px;
  margin-bottom: 10px;
`;

const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const ContactImage = styled.div`
  background: url(${props => props.img}) center no-repeat;
  background-size: cover;
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  // display: flex;
  margin-left: 10px;
`;

const ContactName = styled.h1`
  font-size: 0.9rem;
  margin: 0;
`;

const LastMessage = styled.h1`
  font-size: 0.7rem;
  font-weight: 300;
  color: #959BA7;
  margin: 0;
`;

const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 20px 12px 0;
  justify-content: space-between;
`;

const Date = styled.h1`
  font-size: 0.8rem;
  color: #959BA7;
  font-weight: 300;
  margin: 0;
`;

const Notifications = styled.div`
  font-size: 0.8rem;
  color: #fff;
  background-color: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  align-self: flex-end;
`;


const ContactPreview = ({contact}) => {
  return (
    <ContactContainer>
      <LeftSideContainer>
        <ContactImage img={contact.img}/>
        <TextContainer>
          <ContactName>{contact.name}</ContactName>
          <LastMessage>{contact.lastSentence}</LastMessage>
        </TextContainer>
      </LeftSideContainer>
      <RightSideContainer>
        <Date>{contact.date}</Date>
        {contact.notifications !== 0 && <Notifications>{contact.notifications}</Notifications>}
      </RightSideContainer>
    </ContactContainer>
  )
};

export default ContactPreview