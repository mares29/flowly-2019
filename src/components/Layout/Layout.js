import { graphql, StaticQuery } from "gatsby"
import React from "react"
import ContactUsBar from "../ContactUsBar/ContactUsBar"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import Page from "../Page/Page"
import "./layout.css"

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
class Layout extends React.PureComponent {
  state = {
    isMenuVisible: false,
  }

  handleToggleMenu = () => {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "footer.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        `}
        render={data => (
          <Page>
            <Menu
              visibility={this.state.isMenuVisible}
              onMenuBtnClick={this.handleToggleMenu}
            />
            <Header
              visibility={this.state.isMenuVisible}
              onMenuBtnClick={this.handleToggleMenu}
            />
            <div
              style={{
                margin: "0 auto",
              }}
            >
              {children}
            </div>
            <ContactUsBar />
            <Footer bgImg={data.file} />
          </Page>
        )}
      />
    )
  }
}

Layout.propTypes = {}

export default Layout
