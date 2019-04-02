import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import fonts from '../../constants/fonts'
import icons from '../../constants/icons'
import links from '../../constants/links'
import breakpoints from '../../utils/breakpoints'
import Icon from '../Icon/Icon'

const StyledSocialWrap = styled.p`
  display: flex;
  align-items: center;
  font-family: ${fonts.text.bold};
  margin: 0;
  color: #fff;
  font-size: 16px;

  a {
    display: flex;
    align-items: center;
  }

  span {
    display: flex;
  }

  @media (max-width: ${breakpoints.iphone}) {
    text-align: right;
    align-items: flex-end;
    flex-direction: column;

    span {
      margin-top: 20px;
    }
  }
`

const Social = props => {
  const iconSize = props.small ? 32 : 48
  return (
    <StyledSocialWrap>
      Sledujte nás:
      <span>
        <a href={links.facebook}>
          <Icon
            icon={icons.FACEBOOK}
            size={iconSize}
            color={colors.creative}
            hoverColor="#fff"
            leftMargin={20}
            altText="Facebook"
          />
        </a>
        <a href={links.instagram}>
          <Icon
            icon={icons.INSTAGRAM}
            size={iconSize}
            color={colors.creative}
            hoverColor="#fff"
            leftMargin={10}
            altText="Instagram"
          />
        </a>
      </span>
    </StyledSocialWrap>
  )
}

Social.propTypes = {
  small: PropTypes.bool,
}

Social.defaultProps = {
  small: false,
}

export default Social
