import React from "react"
import styled from "styled-components"
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
        Tým zkušených, nezávislých a kreativních profesionálů pro váš web a
        online marketing.
      </StyledHoreP>
    </Container>
    <StyledButton big to="#obsah">
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
