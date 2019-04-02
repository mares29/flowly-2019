import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import EcommerceIcon from "../assets/images/icons/ecommerce.svg"
import MarketingIcon from "../assets/images/icons/marketing.svg"
import UxIcon from "../assets/images/icons/ux.svg"
import DevIcon from "../assets/images/icons/webdevelopment.svg"
import TrianglesImg from "../assets/images/triangles_services.svg"
import BackgroundImage from "../components/BackgroundImage/BackgroundImage"
import Button from "../components/Button/Button"
import Container from "../components/Container/Container"
import Hero from "../components/Hero/Hero"
import HeroImages from "../components/HeroImages/HeroImages"
import Icon from "../components/Icon/Icon"
import Main from "../components/Main/Main"
import Section from "../components/Section/Section"
import BackgroundTriangles from "../components/Triangle/BackgroundTriables"
import { H2, H3, P } from "../components/Typography/Typography"
import icons from "../constants/icons"
import breakpoints from "../utils/breakpoints"

const StyledAboutText = styled(P)`
  width: 1000px;

  @media (max-width: ${breakpoints.desktop}) {
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
const StyledNotSoWideH2 = styled(H2)`
  max-width: 80%;
  @media (max-width: ${breakpoints.iphone}) {
    max-width: 100%;
  }
`

const pageData = {
  heading: {
    first: "Tvoříme",
    second: "webové zážitky",
  },
  text:
    "Tým nezávislých a kreativních profesionálů pro Váš web & marketing. Tým nezávislých a kreativních profesionálů pro Váš web & marketing",
}

const ServicesPage = ({ data }) => (
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
            Soustředíme se na věci,{" "}
            <span className="break">které umíme nejlépe</span>
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
      <Section long>
        <BackgroundTriangles />
        <Container>
          <StyledServicesList>
            <StyledServiceItem>
              <H3>
                Tvorba webových
                <br />
                stránek & aplikací
              </H3>
              <StyledIcon src={DevIcon} width="200" />
              <P small>
                Nemusíte obvolávat množství lidí v agentuře. S námi jednáte
                napřímo. Kancelářemi jsou nám kavárny, restaurace a jiné obytné
                prostory,{" "}
              </P>
            </StyledServiceItem>

            <StyledServiceItem>
              <H3>Internetový marketing</H3>
              <StyledIcon src={MarketingIcon} width="200" />
              <P small>
                Nemusíte obvolávat množství lidí v agentuře. S námi jednáte
                napřímo. Kancelářemi jsou nám kavárny, restaurace a jiné obytné
                prostory,{" "}
              </P>
            </StyledServiceItem>

            <StyledServiceItem>
              <H3>
                Vývoj e-shopů
                <br />a systémů na míru
              </H3>
              <StyledIcon src={EcommerceIcon} width="200" />
              <P small>
                Nemusíte obvolávat množství lidí v agentuře. S námi jednáte
                napřímo. Kancelářemi jsou nám kavárny, restaurace a jiné obytné
                prostory,{" "}
              </P>
            </StyledServiceItem>

            <StyledServiceItem>
              <H3>Design & User-Experince</H3>
              <StyledIcon src={UxIcon} width="200" />
              <P small>
                Nemusíte obvolávat množství lidí v agentuře. S námi jednáte
                napřímo. Kancelářemi jsou nám kavárny, restaurace a jiné obytné
                prostory,{" "}
              </P>
            </StyledServiceItem>
          </StyledServicesList>
        </Container>
      </Section>
      <StyledSection long>
        <BackgroundImage bgImg={data.image4} />
        <Container>
          <H2>
            Myslíme <span>kreativně,</span>
            <br />
            pracujeme <span>moderně!</span>
          </H2>
          <StyledSubHeroP>
            Kreativita a energie jsou pro nás dvě naprosto klíčová slova. Nebaví
            nás nudné věci, které nedávají žádný smysl. Do každého projektu
            vkládáme kousek sebe a věříme, že je to znát. Chceme dělat věci, ze
            kterých můžeme být nadšení a posunou nás dále v tom, co děláme.
            Inspirujeme se posledními trendy a moderními postupy.
          </StyledSubHeroP>

          <Button>
            <Icon icon={icons.CAFE} rightMargin={20} color="#fff" size={32} />{" "}
            Pojďme se potkat
          </Button>
        </Container>
        <StyledTriangles />
      </StyledSection>

      <StyledSection long>
        <Container>
          <StyledNotSoWideH2>
            Preciznost každého produktu je pro nás to{" "}
            <span>nejdůležitější</span>
          </StyledNotSoWideH2>
          <StyledSubHeroP>
            Nemusíte obvolávat množství lidí v agentuře. S námi jednáte napřímo.
            Kancelářemi jsou nám kavárny, restaurace a jiné obytné prostory, za
            které k našemu potěšení neplatíme nájem. K dobře{" "}
            <strong>odvedené</strong> práci nám stačí zásuvka, počítač a heslo.
          </StyledSubHeroP>
        </Container>
      </StyledSection>
    </Main>
  </React.Fragment>
)

export default ServicesPage

export const servicesQuery = graphql`
  query {
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
