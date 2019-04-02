import React from "react"
import styled from "styled-components"
import colors from "../../constants/colors"
import icons from "../../constants/icons"
import BackgroundImage from "../BackgroundImage/BackgroundImage"
import Button from "../Button/Button"
import Container from "../Container/Container"
import Icon from "../Icon/Icon"
import { H1, HeroP } from "../Typography/Typography"

const StyledHero = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  &:after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      ${colors.flowly} 100%
    );
  }
`
const StyledHoreP = styled(HeroP)`
  max-width: 50%;
`
const StyledButton = styled(Button)`
  position: absolute;
  left: 0;
  bottom: 0;
`

const Hero = ({ bgImg }) => (
  <StyledHero>
    <BackgroundImage bgImg={bgImg} />
    <Container>
      <H1>
        Jsme
        <br />
        <span>Flowly Creative</span>
      </H1>
      <StyledHoreP>
        Tým nezávislých a kreativních profesionálů pro Váš web & marketing. Tým
        nezávislých a kreativních profesionálů pro Váš web & marketing.
      </StyledHoreP>
    </Container>
    <StyledButton big href="#obsah">
      Více o nás{" "}
      <Icon
        icon={icons.ARROW_DOWN}
        color="#fff"
        size={24}
        leftMargin={10}
        altText="pokračovat"
      />
    </StyledButton>
  </StyledHero>
)

export default Hero
