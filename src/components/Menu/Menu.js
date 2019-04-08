import PropTypes from "prop-types"
import * as React from "react"
import { Spring, Trail } from "react-spring/renderprops"
import styled from "styled-components"
import Logo from "../../assets/images/flowly-logo.svg"
import colors from "../../constants/colors"
import fonts from "../../constants/fonts"
import icons from "../../constants/icons"
import breakpoints from "../../utils/breakpoints"
import Icon from "../Icon/Icon"
import { StyledLink } from "../Link/Link"
import Social from "../Social/Social"

const StyledWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9997;
  pointer-events: none;
`
const StyledMenuPanel = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  bottom: 0;
  display: flex;
  pointer-events: initial;

  @media (max-width: ${breakpoints.iphone}) {
    width: 100%;
  }
`
const StyledContactPanel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  bottom: 0;
  display: flex;
  pointer-events: initial;

  @media (max-width: ${breakpoints.iphone}) {
    display: none;
  }
`
const StyledMenu = styled.div`
  flex: 1;
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
`
const StyledContacWrap = styled.div`
  flex: 1;
  background: ${colors.flowly};
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
`
const StyledContact = styled.div`
  flex: 1;
  display: flex;
  align-items: top;
  flex-wrap: nowrap;
  text-align: ${props => props.align};

  &.phone {
    margin: 55px 0 20px;
  }

  p {
    display: inline-block;
    position: relative;
    color: #fff;
    line-height: 30px;
    margin: 0;
    font-size: 18px;
    font-family: ${props => (props.small ? fonts.text.light : fonts.head.bold)};

    &:before {
      content: " ";
      position: absolute;
      left: 0;
      top: 2px;
      width: 30px;
      height: 30px;
      background: url(${props => props.icon}) center no-repeat;
      background-size: contain;
    }
  }
`
const StyledNav = styled.nav`
  ul {
    list-style: none;
    margin: 0;

    li {
      margin-bottom: 60px;
      opacity: 0;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        color: ${colors.flowly};
      }
    }
  }
`

const menuLinks = [
  { title: "Úvod", url: "/" },
  { title: "Služby", url: "/sluzby" },
  { title: "Projekty", url: "/projekty" },
  { title: "O nás", url: "/o-nas" },
  { title: "Kontakty", url: "/kontakt" },
]

class Menu extends React.PureComponent {
  onLinkClick = () => {
    this.props.onMenuBtnClick()
  }

  render() {
    const { visibility } = this.props
    return (
      <Spring
        visibility={visibility}
        from={{
          y: -100,
          opacity: 0,
        }}
        to={{
          y: visibility ? 0 : -100,
          opacity: visibility ? 1 : 0,
        }}
      >
        {styles => (
          <StyledWrap>
            <StyledMenuPanel
              style={{
                transform: `translate3d(0, ${styles.y}%, 0)`,
                opacity: styles.opacity,
              }}
            >
              <StyledMenu>
                <StyledNav>
                  <ul>
                    <Trail
                      from={{ opacity: 0 }}
                      to={{
                        opacity: visibility ? 1 : 0,
                        x: visibility ? 0 : -80,
                      }}
                      items={menuLinks}
                      keys={menuLinks.map(item => item.url)}
                    >
                      {item => props => (
                        <li
                          style={{
                            transform: `translate3d(${props.x}%, 0, 0)`,
                            opacity: props.opacity,
                          }}
                        >
                          <StyledLink
                            to={item.url}
                            onClick={() => this.onLinkClick()}
                          >
                            <span>{item.title}</span>
                          </StyledLink>
                        </li>
                      )}
                    </Trail>
                  </ul>
                </StyledNav>
              </StyledMenu>
            </StyledMenuPanel>
            <StyledContactPanel
              style={{
                transform: `translate3d(0, ${-styles.y}%, 0)`,
                opacity: styles.opacity,
              }}
            >
              <StyledContacWrap>
                <div>
                  <img
                    src={Logo}
                    style={{ margin: "0 0 40px 0" }}
                    width={215}
                    alt="Flowly Creative"
                  />
                  <StyledContact align="left" small>
                    <Icon
                      icon={icons.MAP_PIN}
                      rightMargin={20}
                      color={colors.creative}
                      size={34}
                      altText="adresa"
                    />
                    <p>
                      Křižíkova 734/1
                      <br />
                      370 01 České Budějovice
                    </p>
                  </StyledContact>
                  <StyledContact className="phone" align="center">
                    <Icon
                      icon={icons.PHONE}
                      rightMargin={20}
                      color={colors.creative}
                      size={34}
                      altText="telefon"
                    />
                    <p>+420 728 884 879</p>
                  </StyledContact>
                  <StyledContact align="right">
                    <Icon
                      icon={icons.EMAIL}
                      rightMargin={20}
                      color={colors.creative}
                      size={34}
                      altText="email"
                    />
                    <p>jsme@flowly.cz</p>
                  </StyledContact>
                  <div style={{ marginTop: 40 }}>
                    <Social small />
                  </div>
                </div>
              </StyledContacWrap>
            </StyledContactPanel>
          </StyledWrap>
        )}
      </Spring>
    )
  }
}

Menu.propTypes = {
  onMenuBtnClick: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
}

export default Menu
