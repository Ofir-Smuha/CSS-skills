import React, {Component} from 'react';
import styled from 'styled-components';

import contactImage from 'assets/images/details.jpeg';
import smiley from 'assets/images/icons/smiley.png';
import upload from 'assets/images/icons/upload.png';
import PaperPlane from 'assets/images/icons/paper-plane.png';


const ChatContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin-left: 45px;
`;

const Messages = styled.div`
  margin-bottom: 75px;
`;

const FriendSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgTxtContainer = styled.div`
  display: flex;
  align-items: flex-start;
  
`;

const ImgHourContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FriendImage = styled.div`
  background: url(${props => props.img}) center no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
  margin-bottom: 5px;
`;

const Hour = styled.h3`
  font-size: 0.7rem;
  font-weight: 300;
  margin: 0;
`;

const FriendText = styled.div`
  font-size: 0.9rem;
  background-color: #EAE8ED;
  padding: 12px;
  border-radius: 25px;
`;

const UserMsgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0;
`;

const UserText = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  padding: 12px;
  border-radius: 25px;
  background-color: #2A8AF2;
  color: #fff;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const ActionButton = styled.button`
  background-color: #fff;
  padding: 10px 12px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  border: 1px solid lightgrey;
`;

const FirstActionButton = styled(ActionButton)`
  margin-right: 10px;
`;

const TextActionsArea = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding 10px;
`;

const ImujiInputContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Smiley = styled.div`
  background: url(${smiley}) center no-repeat;
  background-size: cover;
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const MsgInput = styled.input`
  border: none;
  outline: none;
`;

const UploadSendContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UploadIcon = styled.div`
  background: url(${upload}) center no-repeat;
  background-size: cover;
  width: 20px;
  height: 20px;
`;

const SendButton = styled.div`
  background: url(${PaperPlane}) center no-repeat;
  background-size: 15px 15px;
  background-color: #2A8AF2;
  border-radius: 50%;
  display: flex;
  width: 35px;
  height: 35px;
  margin-left: 15px;
`;
class Chat extends Component {

  state = {
    messages: [
      {isOwner: false, text: 'We invite you to our office', img: contactImage, time: '10:00 pm'},
      {isOwner: true, text: 'its like a dream come true, thank you so much'},
      {isOwner: false, text: 'You welcome', img: contactImage, time: '10:05 pm'},
      {isOwner: false, text: 'We invite you to our office', img: contactImage, time: '10:00 pm'},
      {isOwner: true, text: 'its like a dream come true, thank you so much'},
      {isOwner: true, text: 'Bye, thank you so much'},
    ]
  };

  render() {
    return (
      <ChatContainer>
        <Messages>
          {this.state.messages.map(msg => {
            if (!msg.isOwner) {
              return (
                <FriendSide key={msg.text}>
                  <ImgTxtContainer>
                    <ImgHourContainer>
                      <FriendImage img={msg.img}/>
                      <Hour>{msg.time}</Hour>
                    </ImgHourContainer>
                    <FriendText>{msg.text}</FriendText>
                  </ImgTxtContainer>
                </FriendSide>
              )
            } else {
              return (
                <UserMsgContainer key={msg.text}>
                  <UserText>{msg.text}</UserText>
                </UserMsgContainer>
              )
            }
          })}
        </Messages>
        <Panel>
          <ActionButtonsContainer>
            <FirstActionButton>REQUEST VISIT</FirstActionButton>
            <ActionButton>MAKE OFFER</ActionButton>
          </ActionButtonsContainer>
          <TextActionsArea>
            <ImujiInputContainer>
              <Smiley/>
              <MsgInput type="text" placeholder="Type a message..."/>
            </ImujiInputContainer>
            <UploadSendContainer>
              <UploadIcon/>
              <SendButton/>
            </UploadSendContainer>
          </TextActionsArea>
        </Panel>
      </ChatContainer>
    );
  }
}

export default Chat;

