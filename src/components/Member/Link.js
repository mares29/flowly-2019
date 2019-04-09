import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import dribble from "../../assets/images/icons/dribbble.svg"
import linkedin from "../../assets/images/icons/linkedin.svg"
import instagram from "../../assets/images/icons/instagram.svg"
import twitter from "../../assets/images/icons/twitter.svg"
import web from "../../assets/images/icons/web.svg"

const StyledA = styled.a`
  display: inline-block;
  margin-left: 20px;
`

const resolveIcon = url => {
  if (url.includes("twitter")) return twitter
  if (url.includes("dribble")) return dribble
  if (url.includes("instagram")) return instagram
  if (url.includes("linkedin")) return linkedin
  return web
}

const Link = ({ url }) => (
  <StyledA href={url} target="_blank" rel="noopener noreferrer">
    <img width="40" height="40" src={resolveIcon(url)} alt="externí odkaz | Flowly Creative" />
  </StyledA>
)

Link.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Link
