import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import colors from "../../constants/colors"
import fonts from "../../constants/fonts"

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

  svg path {
    transition: 200ms all;
  }

  &:hover {
    color: ${colors.creative};

    svg path {
      fill: ${colors.creative};
    }
  }
`

class Button extends React.Component {
  state = {
    isPaused: false,
    speed: 5,
  }

  clickHandler = () => {
    this.props.onClick()
  }

  render() {
    const { isMenuVisible } = this.props

    return (
      <StyledButton state={this.props.state} onClick={this.clickHandler}>
        {isMenuVisible ? "skrýt" : "menu"}
        <div style={{ marginLeft: 10 }} />
      </StyledButton>
    )
  }
}

Button.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
