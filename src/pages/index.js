import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Clients from "../components/Client/Clients";
import Container from "../components/Container/Container";
import BackgroundTriangles from "../components/Graphics/BackgroundTriables";
import Triangles from "../components/Graphics/Triangles";
import Hero from "../components/Hero/Hero";
import Link from "../components/Link/Link";
import Main from "../components/Main/Main";
import MemberCardList from "../components/Member/MemberCardList";
import RefList from "../components/Reference/RefList";
import Section from "../components/Section/Section";
import Testemonials from "../components/Testemonial/Testemonials";
import { H2, P } from "../components/Typography/Typography";
import breakpoints from "../utils/breakpoints";
import { clients } from "../utils/fakeData";

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
    <Hero bgImg={data.file} hp />
    <Main id="obsah">
      <Section>
        <Triangles opacity={0.1} />
        <Container>
          <H2>
            Rádi vám <span className="break">pomůžeme</span>
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
          <StyledLinks>
            <li>
              <Link to="/sluzby#web">Tvorba webových stránek & aplikací</Link>
            </li>
            <li>
              <Link to="/sluzby#marketing">Internetový marketing</Link>
            </li>
            <li>
              <Link to="/sluzby#web">Vývoj e-shopů a systémů na míru</Link>
            </li>
            <li>
              <Link to="/sluzby#ux">UX design</Link>
            </li>
            <li>
              <Link to="/sluzby">Zobrazit všechny služby</Link>
            </li>
          </StyledLinks>
        </Container>
      </Section>

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
            <RefList references={data.allCockpitProject.edges} />
          </StyledRefWrapper>
        </Container>
        <Container>
          <Link to="/projekty">Prohlédnout všechny reference</Link>
          <Clients clients={clients} />
        </Container>
      </Section>

      <Section long>
        <Testemonials testemonials={data.allCockpitClient.edges} showMoreLink />
      </Section>

      <Section long>
        <Container>
          <H2>
            Kdo se bude starat <span className="break">o Vaše projekty?</span>
          </H2>
          <MemberCardList people={data.allCockpitMember.edges} />
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
      }
    }
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
          photo {
            value {
              childImageSharp {
                sizes(maxWidth: 513) {
                  ...GatsbyImageSharpSizes_noBase64
                }
              }
            }
          }
        }
      }
    }
    allCockpitProject(limit: 4) {
      edges {
        node {
          title {
            value
          }
          bgColor {
            value
          }
          textColor {
            value
          }
          thumbnail {
            value {
              childImageSharp {
                fluid(maxWidth: 513) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
    allCockpitClient(limit: 3) {
      edges {
        node {
          cockpitId
          name {
            value
          }
          position {
            value
          }
          text {
            value
          }
          photo {
            value {
              childImageSharp {
                fixed(width: 90, height: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
