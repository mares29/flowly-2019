import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"
import BackgroundImage from "../BackgroundImage/BackgroundImage"

const StyledWrapper = styled.div`
  width: 100%;
  height: 50vh;
  padding: 0 40px;
  display: flex;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.iphone}) {
    padding: 0 10px;
    margin-bottom: 40px;
    flex-direction: column;
  }
`
const StyledImage = styled.div`
  box-shadow: 0px 26px 70px 0px rgba(27, 7, 8, 0.17);
  opacity: 0.65;
  position: relative;
`
const StyledImage1 = styled(StyledImage)`
  flex: 2;
  margin-right: 40px;

  @media (max-width: ${breakpoints.iphone}) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`
const StyledOtherImagesWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.iphone}) {
    flex-direction: row;
  }
`
const StyledImage2 = styled(StyledImage)`
  flex: 1;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.iphone}) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`
const StyledImage3 = styled(StyledImage)`
  flex: 1;
`

const HeroImages = ({ image1, image2, image3 }) => (
  <StyledWrapper>
    <StyledImage1>
      <BackgroundImage bgImg={image1} />
    </StyledImage1>
    <StyledOtherImagesWrapper>
      <StyledImage2>
        <BackgroundImage bgImg={image2} />
      </StyledImage2>
      <StyledImage3>
        <BackgroundImage bgImg={image3} />
      </StyledImage3>
    </StyledOtherImagesWrapper>
  </StyledWrapper>
)

HeroImages.propTypes = {
  image1: PropTypes.object.isRequired,
  image2: PropTypes.object.isRequired,
  image3: PropTypes.object.isRequired,
}

export default HeroImages
