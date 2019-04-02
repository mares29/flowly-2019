import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ListItem from './ListItem'

const StyledList = styled.ul`
  list-style: none;
  padding-left: 70px;
  margin: 40px 0;
`

const List = ({ items }) => {
  const ListItems = items.map((item, i) => <ListItem key={i} {...item} />)

  return <StyledList>{ListItems}</StyledList>
}

List.propTypes = {
  items: PropTypes.array,
}

export default List
