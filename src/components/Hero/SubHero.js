import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import TrianglesImg from "../../assets/images/triangles_web.svg"
import { downWithFadeInAnimation } from "../../utils/animations"
import breakpoints from "../../utils/breakpoints"
import Container from "../Container/Container"
import { H1, HeroP } from "../Typography/Typography"

const StyledHero = styled.div`
  display: flex;
  position: relative;
  padding: 220px 0 120px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.iphone}) {
    padding: 120px 0 60px;
  }
`
const StyledH1 = styled(H1)`
  font-size: 76px;
  line-height: 90px;
`
const StyledSubHero = styled(HeroP)`
  margin-top: 40px;
`
const StyledTriangles = styled.div`
  position: absolute;
  right: 24%;
  bottom: 4%;
  width: 400px;
  height: 80%;
  background: url(${TrianglesImg}) center no-repeat;
  background-size: cover;
  animation: ${downWithFadeInAnimation} 0.9s ease 0s both;
`

const Hero = ({ heading, text }) => (
  <StyledHero>
    <Container>
      <StyledH1>
        {heading.first}
        <br />
        <span>{heading.second}</span>
      </StyledH1>
      <StyledSubHero>{text}</StyledSubHero>
    </Container>
    <StyledTriangles />
  </StyledHero>
)

Hero.propTypes = {
  heading: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
}

export default Hero
