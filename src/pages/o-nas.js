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
import Seo from "../components/Seo/Seo"

const StyledAboutText = styled(P)`
  width: 1000px;

  @media (max-width: ${breakpoints.iphone}) {
    width: 100%;
  }
`

const pageData = {
  heading: {
    first: "Jsme",
    second: "blázni do webu",
  },
  text:
    "Tým zkušených, nezávislých a kreativních profesionálů pro váš web a online marketing.",
}

const AboutUsPage = ({ data }) => (
  <React.Fragment>
    <Seo
      title="Poznejte tým Flowly Creative | Flowly.cz"
      description="Jsme blázni do webů. Nebaví nás nudné věci, které nedávají smysl. Do každého projektu vkládáme kousek sebe a věříme, že je to znát. Inspirujeme se posledními trendy a moderními postupy."
    />
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
            <span className="break">je dobrá nálada a pohodová spolupráce</span>
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
