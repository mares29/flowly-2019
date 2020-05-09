import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Clients from "../components/Client/Clients"
import Container from "../components/Container/Container"
import BackgroundTriangles from "../components/Graphics/BackgroundTriables"
import Triangles from "../components/Graphics/Triangles"
import Hero from "../components/Hero/Hero"
import Link from "../components/Link/Link"
import Main from "../components/Main/Main"
import MemberCardList from "../components/Member/MemberCardList"
import RefList from "../components/Reference/RefList"
import Section from "../components/Section/Section"
import Seo from "../components/Seo/Seo"
import Testemonials from "../components/Testemonial/Testemonials"
import { H2, P } from "../components/Typography/Typography"
import breakpoints from "../utils/breakpoints"

const StyledSection = styled(Section)`
  padding-top: 200px;
  padding-bottom: 100px;
`
const StyledAboutText = styled(P)`
  width: 80%;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
`
const StyledLinks = styled.ul`
  list-style: none;
  margin: 100px 0 0 0;

  li {
    margin-bottom: 40px;
    display: block;

    &:last-of-type {
      margin-top: 80px;
    }
  }
`
const StyledRefWrapper = styled.div`
  margin: 60px 0;

  @media (max-width: ${breakpoints.iphone}) {
    margin: 30px 0;
  }
`

const IndexPage = ({ data }) => (
  <React.Fragment>
    <Seo
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
    />
    <Hero bgImg={data.file} hp />
    <Main id="obsah">
      <StyledSection>
        <Triangles opacity={0.1} />
        <Container>
          <H2>
            Rádi vám <span className="break">pomůžeme</span>
          </H2>
          <StyledAboutText>
            Nemusíte obvolávat množství lidí v agentuře. U nás{" "}
            <strong>jednáte přímo s jednotlivými odborníky.</strong> Kancelářemi
            jsou nám kavárny, restaurace a jiné obytné prostory, za které k
            našemu potěšení neplatíme nájem. K dobře odvedené práci nám stačí
            zásuvka, počítač, nadšení a zkušenosti. <strong>Jsme parta</strong>{" "}
            freelancerů, která tvoří{" "}
            <strong>
              kompletní organismus pro tvorbu webů včetně marketingu.
            </strong>{" "}
            Nebojíme se ani spolupráce s dalšími týmy a agenturami.
          </StyledAboutText>
          <StyledLinks>
            <li>
              <Link to="/sluzby#web">Tvorba webových stránek & aplikací</Link>
            </li>
            <li>
              <Link to="/sluzby#marketing">Internetový marketing</Link>
            </li>
            <li>
              <Link to="/sluzby#ux">UX design</Link>
            </li>
            <li>
              <Link to="/sluzby">Zobrazit všechny služby</Link>
            </li>
          </StyledLinks>
        </Container>
      </StyledSection>

      <Section long>
        <BackgroundTriangles bottom="0" top="0" right />
        <Container>
          <H2>
            Baví nás dělat projekty,{" "}
            <span className="break">které mají smysl</span>
          </H2>
        </Container>
        <Container wide>
          <StyledRefWrapper>
            <RefList references={data.allSanityProject.edges} />
          </StyledRefWrapper>
        </Container>
        <Container>
          <Link to="/projekty">Prohlédnout všechny reference</Link>
          <Clients clients={data.allSanityLogo.edges} />
        </Container>
      </Section>

      <Section long>
        <Testemonials testemonials={data.allSanityClient.edges} showMoreLink />
      </Section>

      <Section long>
        <Triangles position="left" opacity={0.05} bottom="-10%" />
        <Container>
          <H2>
            Kdo se bude starat <span className="break">o Vaše projekty?</span>
          </H2>
          <MemberCardList people={data.allSanityMember.edges} />
          <Link to="/o-nas">Více informací o nás</Link>
        </Container>
      </Section>
    </Main>
  </React.Fragment>
)

export default IndexPage

export const homepageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allSanityMember(sort: { order: ASC, fields: priority }) {
      edges {
        node {
          name
          surname
          position
          cover {
            asset {
              fixed(width: 513) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
    allSanityProject(limit: 4) {
      edges {
        node {
          name
          thumbnailColor {
            hex
          }
          textColor {
            hex
          }
          thumbnail {
            asset {
              fluid(maxWidth: 513) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    allSanityClient(limit: 3) {
      edges {
        node {
          name
          position
          text
          cover {
            asset {
              fixed(width: 90, height: 90) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
    allSanityLogo(limit: 6) {
      edges {
        node {
          logo {
            asset {
              fixed(width: 240) {
                ...GatsbySanityImageFixed
              }
            }
          }
          alt
          title
        }
      }
    }
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
