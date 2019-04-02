import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import fonts from '../../constants/fonts'
import icons from '../../constants/icons'
import breakpoints from '../../utils/breakpoints'
import Icon from '../Icon/Icon'

const StyledBar = styled.div`
  background: ${colors.creative};
  display: flex;
  justify-content: center;
  padding: 50px 0;
  margin-top: 200px;

  a {
    color: #fff;
    display: flex;
    align-items: center;
    font-family: ${fonts.head.bold};
    font-size: 36px;
    text-decoration: none;

    img {
      margin: 0 20px;
    }
  }

  @media (max-width: ${breakpoints.iphone}) {
    margin-top: 100px;
    padding: 50px 20px;

    a {
      font-size: 24px;
      line-height: 34px;
    }
  }
`

const ContactUsBar = () => (
  <StyledBar>
    <Link to="/kontakt">
      <Icon icon={icons.CROWN} color="#fff" size={64} rightMargin={20} altText="korunka" />
      Pojďme se pustit do něčeho nového
      <Icon icon={icons.ARROW_RIGHT} color="#fff" size={23} leftMargin={20} altText="pokračovat" />
    </Link>
  </StyledBar>
)

export default ContactUsBar
