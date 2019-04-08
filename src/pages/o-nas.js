import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import TrianglesImg from "../assets/images/triangles_services.svg"
import Container from "../components/Container/Container"
import BackgroundTriangles from "../components/Graphics/BackgroundTriables"
import Hero from "../components/Hero/Hero"
import HeroImages from "../components/HeroImages/HeroImages"
import Main from "../components/Main/Main"
import MemberList from "../components/Member/MemberList"
import Section from "../components/Section/Section"
import { H2, P } from "../components/Typography/Typography"
import breakpoints from "../utils/breakpoints"

const StyledAboutText = styled(P)`
  width: 1000px;

  @media (max-width: ${breakpoints.iphone}) {
    width: 100%;
  }
`
const StyledServicesList = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledServiceItem = styled.div`
  flex: 1;
  margin-bottom: 180px;
  padding-right: 40%;

  &:nth-child(even) {
    padding-right: 0;
    padding-left: 40%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding-right: 0;
    &:nth-child(even) {
      padding-left: 0;
    }
  }
`
const StyledIcon = styled.img`
  float: left;
  margin-right: 65px;
`
const StyledSection = styled(Section)`
  padding: 200px 0;
`
const StyledSubHeroP = styled(P)`
  max-width: 70%;
  @media (max-width: ${breakpoints.iphone}) {
    max-width: 100%;
  }
`
const StyledTriangles = styled.div`
  position: absolute;
  right: 16%;
  bottom: 5%;
  width: 40%;
  height: 100%;
  background: url(${TrianglesImg}) center no-repeat;
  background-size: contain;
  opacity: 0.3;
`

const pageData = {
  heading: {
    first: "Jsme",
    second: "blázni do webu",
  },
  text:
    "Tým nezávislých a kreativních profesionálů pro Váš web & marketing. Tým nezávislých a kreativních profesionálů pro Váš web & marketing",
}

const AboutUsPage = ({ data }) => (
  <React.Fragment>
    <Hero {...pageData} />
    <Main>
      <HeroImages
        image1={data.image2}
        image2={data.image1}
        image3={data.image3}
      />
      <Section long>
        <Container>
          <H2>
            Pokud je skvělý tým,{" "}
            <span className="break">je skvělá nálada a parádní práce</span>
          </H2>
          <StyledAboutText>
            Nemusíte obvolávat množství lidí v agentuře. S námi jednáte napřímo.
            Kancelářemi jsou nám kavárny, restaurace a jiné obytné prostory, za
            které k našemu potěšení neplatíme nájem. K dobře{" "}
            <strong>odvedené práci</strong> nám stačí zásuvka, počítač a heslo „
            s chutí do toho, půl je hotovo“. Jsme parta mladých lidí, která
            tvoří dohromady kompletní organismus pro tvorbu webů včetně
            marketingu. Jsme dobří, <strong>jsme freelanceři</strong>{" "}
            spoléhající se na vlastní um.
          </StyledAboutText>
        </Container>
      </Section>

      <Section long style={{ paddingTop: 0 }}>
        <BackgroundTriangles />
        <Container>
          <MemberList people={data.allCockpitMember.edges} />
        </Container>
      </Section>
    </Main>
  </React.Fragment>
)

export default AboutUsPage

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
          username {
            value
          }
          position {
            value
          }
          links {
            value {
              value
            }
          }
          bio {
            value
          }
          photo {
            value {
              childImageSharp {
                fluid(maxWidth: 513) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    image1: file(relativePath: { eq: "heroimages/stock1.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(relativePath: { eq: "heroimages/stock2.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(relativePath: { eq: "heroimages/stock3.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image4: file(relativePath: { eq: "heroimages/stock4.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
