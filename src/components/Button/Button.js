import styled, { css } from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import colors from "../../constants/colors"
import breakpoints from "../../utils/breakpoints"

const BaseButton = css`
  display: block;
  background: ${colors.creative};
  position: relative;
  width: ${props => (props.big ? 350 : 295)}px;
  height: ${props => (props.big ? 100 : 79)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #fff;
  font-family: "bw_modelicabold";
  text-decoration: none;
  z-index: 9992;
  cursor: pointer;

  @media (max-width: ${breakpoints.iphone}) {
    width: 300px;
    height: 70px;
  }
`
const StyledButton = styled.button`
  ${BaseButton}
`
const StyledA = styled.a`
  ${BaseButton}
`

const Button = ({ to, children, ...other }) => {
  if (to) {
    return (
      <StyledA href={to} {...other}>
        {children}
      </StyledA>
    )
  }

  return <StyledButton {...other}>{children}</StyledButton>
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Button
