import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import icoFlowly from "../../assets/images/flowly-logo-footer.svg";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import icons from "../../constants/icons";
import breakpoints from "../../utils/breakpoints";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import Social from "../Social/Social";

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 100vh;
  padding-top: 90px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1280px) {
    height: auto;
    min-height: 100vh;
  }
`
const StyledContactWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 50px 0 86px;
  margin-bottom: 42px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${breakpoints.ipad}) {
    flex-direction: column;
    justify-content: center;
  }
`
const StyledContact = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  text-align: ${props => props.align};

  @media (max-width: ${breakpoints.iphone}) {
    margin-bottom: 20px;
  }

  p {
    display: inline-block;
    position: relative;
    margin: 0;
    color: #fff;
    line-height: ${props => (props.small ? "41px" : "31px")};
    font-size: ${props => (props.small ? "26px" : "32px")};
    font-family: ${props => (props.small ? fonts.text.light : fonts.head.bold)};

    @media (max-width: ${breakpoints.desktop}) {
      font-size: ${props => (props.small ? "20px" : "26px")};
    }
  }

  &:first-of-type {
    svg {
      align-self: flex-start;
    }
  }
`
const StyledNavWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
const StyledNavLoveContainer = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledNav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    margin: 0;
    display: flex;

    @media (max-width: ${breakpoints.iphone}) {
      flex-direction: column;
      justify-content: center;
    }

    li {
      margin: 0;

      @media (max-width: ${breakpoints.iphone}) {
        margin-bottom: 20px;
      }

      a {
        display: inline-block;
        margin-right: 50px;
        color: rgba(255, 255, 255, 0.4);
        text-decoration: none;
        font-family: ${fonts.head.bold};

        &:hover {
          color: ${colors.creative};
        }
      }
    }
  }
`
const StyledLove = styled.p`
  position: relative;
  margin-top: 150;
  text-align: center;
  font-family: ${fonts.text.light};
  font-size: 18px;
  margin-top: 40px;
  color: #fff;

  svg {
    vertical-align: bottom;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 100px;
  }
`
const StyledCopyWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 0;
`
const StyledCopy = styled.div`
  display: flex;
  flex: 1;
  padding: 40px 0;
  justify-content: space-between;
  align-items: center;

  a,
  p {
    color: #5c4b77;
    margin: 0;
  }

  a {
    text-decoration: underline;
    display: flex;
    align-items: center;
    transition: all 200ms;

    &:hover {
      color: #fff;

      path {
        fill: #fff;
      }
    }

    img {
      margin-left: 10px;
    }
  }
`
const LogoWrap = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledVLine = styled.div`
  width: 1px;
  height: 100%;
  background: #fff;
  opacity: .1;
  align-self: center;
  flex: 1;
`

const Footer = ({ bgImg }) => (
  <StyledFooter>
    <BackgroundImage bgImg={bgImg} />
    <Container>
      <LogoWrap>
        <img src={icoFlowly} width="250" alt="Flowly Creative" />
      </LogoWrap>
      <StyledContactWrap>
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
        <StyledContact align="center">
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
      </StyledContactWrap>
    </Container>

    <StyledNavLoveContainer>
      <StyledNavWrap>
        <StyledNav>
          <ul>
            <li>
              <Link to="/">Flowly</Link>
            </li>
            <li>
              <Link to="/sluzby">Služby</Link>
            </li>
            <li>
              <Link to="/projekty">Projekty</Link>
            </li>
            <li>
              <Link to="/o-nas">O nás</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </StyledNav>
        <Social />
      </StyledNavWrap>
      <StyledVLine />
      <StyledLove>
        Oh, we{" "}
        <Icon
          icon={icons.HEART}
          leftMargin={5}
          rightMargin={5}
          color={colors.creative}
          size={26}
          altText="srdce"
        />
        {` `}
        work with you and city of Budweis.
      </StyledLove>
    </StyledNavLoveContainer>
    <StyledCopyWrap>
      <Container>
        <StyledCopy>
          <p>© 2015 Flowly Creative</p>
          <a href="#top">
            Nahoru{" "}
            <Icon
              icon={icons.ARROW_UP}
              leftMargin={10}
              color={colors.creative}
              size={24}
              altText="nahoru"
            />
          </a>
        </StyledCopy>
      </Container>
    </StyledCopyWrap>
  </StyledFooter>
)

Footer.propTypes = {
  bgImg: PropTypes.object.isRequired,
}

export default Footer
