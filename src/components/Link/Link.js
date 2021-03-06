import Link from "gatsby-link"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import icoRightArrow from "../../assets/images/arrow-right.svg"
import colors from "../../constants/colors"
import fonts from "../../constants/fonts"
import breakpoints from "../../utils/breakpoints"

const StyledLinkBase = css`
  font-family: ${fonts.head.bold};
  color: #fff;
  text-decoration: none;
  font-size: 28px;
  position: relative;
  margin-right: 30px;
  cursor: pointer;

  @media (max-width: ${breakpoints.iphone}) {
    font-size: 18px;
  }

  span {
    position: relative;
    z-index: 4;

    &:after {
      content: " ";
      position: absolute;
      right: -30px;
      bottom: 0;
      width: 20px;
      height: 30px;
      background: url(${icoRightArrow}) center no-repeat;
      background-size: contain;

      @media (max-width: ${breakpoints.iphone}) {
        height: 20px;
      }
    }
  }

  &:after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 9px;
    background: ${colors.creative};
    z-index: 0;
    transition: all 100ms;
  }

  &:hover {
    &:after {
      height: 90%;
    }
  }
`
export const StyledLink = styled(Link)`
  ${StyledLinkBase}
`
const StyledA = styled.a`
  ${StyledLinkBase}
`

const MyLink = ({ to, children, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <StyledLink to={to} {...other}>
        <span>{children}</span>
      </StyledLink>
    )
  }

  return (
    <StyledA href={to} {...other}>
      <span>{children}</span>
    </StyledA>
  )
}

MyLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default MyLink
