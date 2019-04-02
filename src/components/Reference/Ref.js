import React from "react"
import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"

const StyledRef = styled.article`
  background-color: ${props => props.bgColor};
  background-size: contain;
  padding: 50px 40px;
  width: 48%;
  height: 487px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  &:nth-child(even) {
    margin: 60px 0 0 30px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    height: 300px;
    margin: 30px 0 0 0;
    padding: 20px;
    &:nth-child(even) {
      margin: 30px 0 0 0;
    }
  }
`
const StyledHeading = styled.h3`
  color: ${props => props.color};
  font-size: 34px;
  line-height: 55px;
  max-width: 45%;
  z-index: 999;

  @media (max-width: ${breakpoints.iphone}) {
    font-size: 26px;
    line-height: 34px;
    max-width: 100%;
  }
`
const StyledLink = styled.a`
  color: ${props => props.color};
  text-decoration: underline;
  font-size: 16px;
`
const StyledCover = styled.div`
  position: absolute;
  top: 0;
  left: 31%;
  bottom: 0;
  right: 0;
  margin: 0;
  background: url(${props => props.img}) bottom right no-repeat;
  background-size: contain;
  transition: transform 800ms;
  transform-origin: center;

  ${StyledRef}:hover & {
    transform: scale(1.08);
  }
`

const Ref = ({ title, colorText, colorBg, image, link }) => (
  <StyledRef bgColor={colorBg}>
    <StyledHeading color={colorText}>{title}</StyledHeading>
    <StyledLink color={colorText}>Prohlédnout projekt</StyledLink>
    <StyledCover img={image.fluid.src} />
  </StyledRef>
)

export default Ref
