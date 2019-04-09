import styled from "styled-components"
import colors from "../../constants/colors"
import { downWithFadeInAnimation } from "../../utils/animations"
import breakpoints from "../../utils/breakpoints"

export const H1 = styled.h1`
  color: #fff;
  font-size: 100px;
  line-height: 126px;
  animation: ${downWithFadeInAnimation} 0.9s ease 0.4s both;

  span {
    color: ${colors.creative};
  }

  @media (max-width: ${breakpoints.iphone}) {
    font-size: 54px;
    line-height: 66px;
  }
`
export const H2 = styled.h2`
  color: #fff;
  font-size: 50px;
  line-height: 67px;
  margin-bottom: 52px;

  span {
    color: ${colors.creative};
  }

  @media (max-width: ${breakpoints.iphone}) {
    font-size: 38px;
    line-height: 46px;
  }
`
export const H3 = styled.h3`
  color: #fff;
  font-size: 36px;
  line-height: 50px;
  margin-bottom: 42px;

  span {
    color: ${colors.creative};
  }

  @media (max-width: ${breakpoints.iphone}) {
    font-size: 28px;
    line-height: 38px;
  }
`
export const H4 = styled.h4`
  color: #fff;
  font-size: 28px;
  line-height: 36px;
  margin-bottom: 30px;

  span {
    color: ${colors.creative};
  }

  @media (max-width: ${breakpoints.iphone}) {
    font-size: 18px;
    line-height: 26px;
  }
`
export const H5 = styled.h5`
  color: #fff;
  font-size: 20px;
  line-height: 36px;
  margin-bottom: 30px;

  span {
    color: ${colors.creative};
  }

  @media (max-width: ${breakpoints.iphone}) {
    font-size: 16px;
    line-height: 26px;
  }
`
export const P = styled.p`
  color: #fff;
  font-size: ${props => (props.small ? 18 : 24)}px;
  line-height: ${props => (props.small ? 32 : 42)}px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.iphone}) {
    font-size: 18px;
    line-height: 30px;
    clear: both;
  }
`
export const HeroP = styled.p`
  color: #fff;
  font-size: 24px;
  line-height: 42px;
  max-width: 800px;
  margin-top: 100px;
  animation: ${downWithFadeInAnimation} 0.9s ease 0.7s both;

  @media (max-width: ${breakpoints.ipad}) {
    font-size: 20px;
    line-height: 34px;
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.iphone}) {
    font-size: 20px;
    line-height: 34px;
    max-width: 100%;
    margin-top: 40px;
  }
`
export const Hr = styled.div`
  height: 1px;
  width: 100%;
  background: #fff;
  opacity: 0.06;
  margin: 40px 0 80px;
  transform: rotate(${props => (props.reversed ? 2 : -2)}deg);
`

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  li {
    display: flex;
    align-items: center;
    width: 50%;
    color: #fff;
    list-style-type: none;
    &:before {
      display: block;
      content: " ";
      width: 12px;
      height: 12px;
      margin-right: 15px;
      border-radius: 6px;
      background: ${colors.creative};
    }
  }
`
