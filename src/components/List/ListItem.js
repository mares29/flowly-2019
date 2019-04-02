import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H4, P } from '../Typography/Typography'

import colors from '../../constants/colors'

const StyledItem = styled.li`
  position: relative;
  margin-bottom: 60px;
  max-width: 80%;
  &:before {
    content: ' ';
    position: absolute;
    top: 16px;
    left: -70px;
    width: 44px;
    height: 5px;
    background: ${colors.creative};
  }
`

const ListItem = ({ heading, text }) => (
  <StyledItem>
    <H4>{heading}</H4>
    <P small>{text}</P>
  </StyledItem>
)

ListItem.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ListItem
