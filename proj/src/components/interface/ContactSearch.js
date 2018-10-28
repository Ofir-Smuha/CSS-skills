import React from 'react'
import styled from 'styled-components'

import search from 'assets/images/icons/search.png';

const SearchContainer = styled.div`
  display: flex;
  flex-grow: 2
  border-bottom: 1px solid lightgrey;
  padding-bottom: 10px;
`;

const SearchIcon = styled.div`
  background: url(${search}) center no-repeat;
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
`;

const ContactSearch = () => {
  return (
    <SearchContainer>
      <SearchIcon/>
      <Input placeholder="Search"/>
    </SearchContainer>
  )
}

export default ContactSearch