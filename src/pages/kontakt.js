import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import map from "../assets/images/map.svg"
import Button from "../components/Button/Button"
import Container from "../components/Container/Container"
import Form from "../components/Form/Form"
import Input from "../components/Form/Input"
import Textarea from "../components/Form/Textarea"
import BackgroundTriables from "../components/Graphics/BackgroundTriables"
import Column from "../components/Grid/Column"
import Row from "../components/Grid/Row"
import Hero from "../components/Hero/Hero"
import Icon from "../components/Icon/Icon"
import Link from "../components/Link/Link"
import Main from "../components/Main/Main"
import MemberRowList from "../components/Member/MemberRowList"
import Section from "../components/Section/Section"
import { H2, H4, P } from "../components/Typography/Typography"
import colors from "../constants/colors"
import fonts from "../constants/fonts"
import icons from "../constants/icons"
import breakpoints from "../utils/breakpoints"

const StyledMapText = styled(P)`
  width: 40%;

  @media (max-width: ${breakpoints.iphone}) {
    width: 100%;
  }
`
const FormButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`
const StyledFormButton = styled(Button)`
  bottom: -40px;

  @media (max-width: ${breakpoints.iphone}) {
    bottom: -30px;
  }
`
const MapWrap = styled.div`
  position: absolute;
  top: 80px;
  bottom: 5%;
  left: 5%;
  right: 0%;
  @media (max-width: ${breakpoints.iphone}) {
    top: 250px;
  }
`
const StyledMapSection = styled(Section)`
  justify-content: flex-start;
  padding-top: 60px;
`
const StyledContactWrap = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  padding: 50px 0 50px;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.ipad}) {
    flex-direction: column;
    justify-content: center;
  }
`
const StyledContact = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  text-align: ${props => props.align};
  margin-bottom: 50px;

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

const pageData = {
  heading: {
    first: "Pojďme",
    second: "se potkat",
  },
  text:
    "Tým nezávislých a kreativních profesionálů pro Váš web & marketing. Tým nezávislých a kreativních profesionálů pro Váš web & marketing",
}
const ContactPage = ({ data }) => (
  <React.Fragment>
    <Hero {...pageData} />
    <Main>
      <Section long>
        <Container>
          <H4>Ozvěte se nám</H4>

          <StyledContactWrap>
            <div>
              <StyledContact>
                <Icon
                  icon={icons.PHONE}
                  rightMargin={20}
                  color={colors.creative}
                  size={40}
                  altText="telefon"
                />
                <p>+420 728 884 879</p>
              </StyledContact>
              <StyledContact>
                <Icon
                  icon={icons.EMAIL}
                  rightMargin={20}
                  color={colors.creative}
                  size={40}
                  altText="email"
                />
                <p>jsme@flowly.cz</p>
              </StyledContact>
              <StyledContact small>
                <Icon
                  icon={icons.MAP_PIN}
                  rightMargin={20}
                  color={colors.creative}
                  size={40}
                  altText="adresa"
                />
                <div style={{ paddingTop: "4px" }}>
                  <Link to="#form">Napište nám</Link>
                </div>
              </StyledContact>
            </div>
            <div>
              <StyledContact small>
                <Icon
                  icon={icons.MAP_PIN}
                  rightMargin={20}
                  color={colors.creative}
                  size={40}
                  altText="adresa"
                />
                <p>
                  Areál Aspery
                  <br />
                  Křižíkova 734/1
                  <br />
                  370 01 České Budějovice
                </p>
              </StyledContact>
            </div>
          </StyledContactWrap>
        </Container>
      </Section>
      <StyledMapSection>
        <BackgroundTriables bottom="-50%" top="-10%" right />
        <MapWrap>
          <img
            alt="Vzdálenost pro nás není problém | Flowly Creative"
            src={map}
            width="100%"
          />
        </MapWrap>
        <Container>
          <H2>
            Vzdálenost pro nás <span className="break">není problém</span>
          </H2>
          <StyledMapText small>
            Nemusíte obvolávat množství lidí v agentuře. S námi jednáte napřímo.
            Kancelářemi jsou nám kavárny, restaurace a jiné obytné prostory.
          </StyledMapText>
        </Container>
      </StyledMapSection>

      <Section id="form" long>
        <Container>
          <H2>
            Napište nám zprávu <span className="break">pomocí formuláře</span>
          </H2>
          <P className="with-pretty-link">
            Používáte Facebook messenger? Napište nám přes{" "}
            <a
              href="https://www.messenger.com/t/190452727982647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Messenger
            </a>
          </P>

          <Form
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <Row>
              <Column>
                <Input
                  type="text"
                  name="name"
                  placeholder="Zadejte Vaše jméno"
                />
              </Column>
              <Column>
                <Input
                  type="email"
                  name="email"
                  placeholder="Zadejte Váš email"
                />
              </Column>
              <Column>
                <Input
                  type="name"
                  name="phone"
                  placeholder="Zadejte Váš telefon"
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <Textarea name="text" />
              </Column>
            </Row>
            <Row>
              <FormButtonWrap>
                <StyledFormButton type="submit">
                  <Icon
                    icon={icons.EMAIL}
                    rightMargin={10}
                    color="#fff"
                    size={28}
                    altText="email"
                  />
                  Odeslat zprávu
                </StyledFormButton>
              </FormButtonWrap>
            </Row>
          </Form>
        </Container>
      </Section>

      <Section long style={{ paddingTop: 0 }}>
        <Container>
          <H2>
            Kontakty
            <span> na členy</span>
          </H2>
          <MemberRowList people={data.allCockpitMember.edges} />
        </Container>
      </Section>
    </Main>
  </React.Fragment>
)

export default ContactPage

export const servicesQuery = graphql`
  query {
    allCockpitMember {
      edges {
        node {
          name {
            value
          }
          surname {
            value
          }
          position {
            value
          }
          email {
            value
          }
          phone {
            value
          }
          photo {
            value {
              childImageSharp {
                resolutions(width: 140, height: 140) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`
