import React, {Component} from 'react';
import styled from 'styled-components'

import SideBar from './SideBar'
import ChatContainer from './ChatContainer'

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
`

const InterfaceContainer = styled.div`
  max-width: 1600px;
  width: 90%;
  height: 90%;
  background-color: grey;
  display: flex;
`

class Interface extends Component {
  render() {
    return (
      <Background>
        <InterfaceContainer>
          <SideBar/>
          <ChatContainer/>
        </InterfaceContainer>
      </Background>
    );
  }
}

export default Interface;