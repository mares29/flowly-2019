import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import colors from "../../constants/colors"
import fonts from "../../constants/fonts"
import Cross from "./Cross"
import breakpoints from "../../utils/breakpoints"

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  border: 0;
  background: none;
  text-transform: uppercase;
  font-family: ${fonts.head.bold};
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: 200ms all;
  padding: 0;

  @media (max-width: ${breakpoints.iphone}) {
    margin-right: -20px;
  }

  svg {
    margin-left: -10px;
  }

  svg path {
    transition: 200ms all;
  }

  &:hover {
    color: ${colors.creative};

    svg path {
      stroke: ${colors.creative};
    }
  }
`

const Button = props => {
  const clickHandler = () => {
    props.onClick()
  }

  const { isMenuVisible } = props

  return (
    <StyledButton onClick={clickHandler}>
      {isMenuVisible ? "skrýt" : "menu"}
      <Cross isOpen={isMenuVisible} />
    </StyledButton>
  )
}

Button.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
