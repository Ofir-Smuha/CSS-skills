import React, {Component} from 'react';
import styled from 'styled-components'

import TrendsPreview from './TrendPreview'
import TrendPhoto from 'assets/images/details.jpeg'

const ListContainer = styled.div`
  width: 650px;
  height: 580px;
  background-color: #fff;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  box-shadow: 2px 8px 39px -1px rgba(191,181,191,1);
`

const List = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  &:last-child {
    border: none;
  }
`

class TrendsList extends Component {

  state = {
    trends: [
      {img: TrendPhoto, title: 'The flash', date: '17 NOV 2015', rate: 'S2'},
      {img: TrendPhoto, title: 'Daredevil', date: '22 NOV 2015', rate: 'S4'},
      {img: TrendPhoto, title: 'Gotham', date: '16 NOV 2015', rate: 'S2'},
      {img: TrendPhoto, title: 'Serlock', date: '25 NOV 2015', rate: 'S4'}
    ]
  }

  render() {
    return (
      <ListContainer>
        <List>
          {
            this.state.trends.map(trend => <TrendsPreview key={trend.date} trend={trend}/>)
          }
        </List>
      </ListContainer>
    );
  }
}

export default TrendsList;