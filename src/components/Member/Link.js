import PropTypes from "prop-types"
import React from "react"

const resolveIcon = url => {
  if (url.includes("facebook")) return "FCB"
  if (url.includes("insta")) return "INSTA"
  if (url.includes("twitter")) return "TW"
  return "WEB"
}

const Link = ({ url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {resolveIcon(url)}
  </a>
)

Link.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Link
