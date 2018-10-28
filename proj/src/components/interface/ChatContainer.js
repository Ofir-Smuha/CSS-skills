import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import ContactSearch from './ContactSearch'
import ContactList from './ContactList'
import ChatTopic from './ChatTopic'

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
        <ChatTopic/>
      </ContextContainer>
    </Background>
  )
}

export default ChatContainer