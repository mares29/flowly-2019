import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledSvg = styled.svg`
  display: 'inline-block';
  vertical-align: 'middle';
  margin-left: ${props => props.leftMargin || 0}px;
  margin-right: ${props => props.rightMargin || 0}px;
  path {
    fill: ${props => props.color};
    transition: all 200ms;
  }
  &:hover path {
    fill: ${props => props.hoverColor};
  }
`

const Icon = props => (
  <StyledSvg
    color={props.color}
    hoverColor={props.hoverColor}
    leftMargin={props.leftMargin}
    rightMargin={props.rightMargin}
    width={`${props.size}px`}
    height={`${props.size}px`}
    viewBox="0 0 128 128"
    role="img"
    aria-label={props.altText}
  >
    <title>{props.altText}</title>
    <path d={props.icon} />
  </StyledSvg>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  leftMargin: PropTypes.number,
  rightMargin: PropTypes.number,
}

Icon.defaultProps = {
  size: 16,
  color: 'black',
  hoverColor: 'white',
  leftMargin: 0,
  rightMargin: 0,
}

export default Icon
