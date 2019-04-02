import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"

const StyledTestemonial = styled.div`
  flex: 1;
  padding: 62px 62px 30px;
`
const StyledText = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #fff;
  text-align: center;
  font-style: italic;

  @media (max-width: ${breakpoints.iphone}) {
    font-size: 16px;
    line-height: 28px;
  }
`
const StyledClient = styled.div`
  text-align: center;

  h5 {
    color: #fff;
    font-size: 26px;
  }

  p {
    color: #8162a8;
    font-size: 16px;
  }
`

const Testemonial = ({ text, position, name, photo }) => (
  <StyledTestemonial>
    <StyledText>{text.value}</StyledText>
    <StyledClient>
      <Img fixed={photo.childImageSharp.fixed} />
      <h5>{name.value}</h5>
      <p>{position.value}</p>
    </StyledClient>
  </StyledTestemonial>
)

Testemonial.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  photo: PropTypes.object.isRequired,
}

export default Testemonial
