import React, {Component} from 'react';
import styled from 'styled-components'

import ContactPreview from './ContactPreview'
import contactImage from 'assets/images/details.jpeg'

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class ContactList extends Component {
  state = {
    contacts: [
      {img: contactImage, name: 'Hurin omar', lastSentence: 'Sure 8pm', date: '02 feb', notifications: 5},
      {img: contactImage, name: 'Victor', lastSentence: 'Early but productive', date: '02 feb', notifications: 1},
      {img: contactImage, name: 'Hali', lastSentence: 'No yes No', date: '02 apr', notifications: 3},
      {img: contactImage, name: 'Jony', lastSentence: 'Why not', date: '02 dec', notifications: 0},
      {img: contactImage, name: 'Suffiya', lastSentence: 'Not 8pm', date: '02 jan', notifications: 0},
      {img: contactImage, name: 'Pablo', lastSentence: 'Hey', date: '02 oct', notifications: 0},
      {img: contactImage, name: 'Ferharn', lastSentence: 'Hello', date: '02 feb', notifications: 0},
      {img: contactImage, name: 'Bony', lastSentence: 'Why not', date: '02 dec', notifications: 0},
    ]
  }

  render() {
    return (
      <ListContainer>
        {this.state.contacts.map(contact => <ContactPreview key={contact.name} contact={contact}/>)}
      </ListContainer>
    );
  }
}

export default ContactList;