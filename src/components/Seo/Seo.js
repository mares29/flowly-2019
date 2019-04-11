import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

const Seo = ({ title, description, keywords }) => (
  <Helmet
    charSet="utf-8"
    title={title}
    meta={[
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: "flowly.cz"}
    ]}
  >
    <html lang="cs" />
  </Helmet>
)

Seo.defaultProps = {
  keywords: "",
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
}

export default Seo
