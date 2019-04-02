import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import icons from '../../constants/icons'
import breakpoints from '../../utils/breakpoints'
import Icon from '../Icon/Icon'
import Button from './Button'

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  z-index: 9999;

  @media (max-width: ${breakpoints.desktop}) {
    height: 80px;
    padding: 0 20px;
  }
`

const Header = props => (
  <StyledHeader>
    <Link to="/" title="Flowly Creative">
      <Icon icon={icons.CROWN} color="#fff" size={36} altText="Flowly Creative" />
    </Link>
    <Button isMenuVisible={props.visibility} onClick={props.onMenuBtnClick} />
  </StyledHeader>
)

Header.propTypes = {
  onMenuBtnClick: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
}

export default Header
