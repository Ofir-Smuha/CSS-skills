import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import ContactSearch from './ContactSearch'
import ContactList from './ContactList'
import ChatTopic from './ChatTopic'
import Chat from './Chat'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F5F5FC;
`;

const ContextContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;

const ContactsContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const TextingContainer = styled.div`
  width: 700px;
  height: 100%:
  display: flex;
  flex-direction: column;
`;

const ChatContainer = () => {
  return (
    <Background>
      <Header/>
      <ContextContainer>
        <ContactsContainer>
          <ContactSearch/>
          <ContactList/>
        </ContactsContainer>
        <TextingContainer>
          <ChatTopic/>
          <Chat/>
        </TextingContainer>
      </ContextContainer>
    </Background>
  )
}

export default ChatContainer