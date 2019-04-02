import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

const BackgroundImage = ({ bgImg }) => (
  <Img
    css={{ top: 0, left: 0, width: `100%`, height: `100%`, zIndex: 0 }}
    style={{
      position: `absolute`,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
    fluid={bgImg.childImageSharp.fluid}
  />
)

BackgroundImage.propType = {
  bgImg: PropTypes.object.isRequired,
}

export default BackgroundImage
