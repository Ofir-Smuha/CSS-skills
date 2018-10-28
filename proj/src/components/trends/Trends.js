import React from 'react'
import styled from 'styled-components'

import TrendsList from './TrendsList'
import TrendDetails from './TrendDetails'

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ECEFF4;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Trends = () => {
  return (
      <Background>
        <Wrapper>
          <TrendDetails/>
          <TrendsList/>
        </Wrapper>
      </Background>
  )
}

export default Trends