import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import EcommerceIcon from "../assets/images/icons/ecommerce.svg"
import MarketingIcon from "../assets/images/icons/marketing.svg"
import UxIcon from "../assets/images/icons/ux.svg"
import DevIcon from "../assets/images/icons/webdevelopment.svg"
import BackgroundImage from "../components/BackgroundImage/BackgroundImage"
import Button from "../components/Button/Button"
import Container from "../components/Container/Container"
import BackgroundTriangles from "../components/Graphics/BackgroundTriables"
import GraphicTriangles from "../components/Graphics/Triangles"
import Hero from "../components/Hero/Hero"
import HeroImages from "../components/HeroImages/HeroImages"
import Icon from "../components/Icon/Icon"
import Main from "../components/Main/Main"
import Section from "../components/Section/Section"
import { H2, H3, H5, P, Ul } from "../components/Typography/Typography"
import icons from "../constants/icons"
import breakpoints from "../utils/breakpoints"
import colors from "../constants/colors"
import strategy from "../assets/images/icons/strategy.svg"
import research from "../assets/images/icons/research.svg"
import design from "../assets/images/icons/design.svg"
import development from "../assets/images/icons/development.svg"
import marketing from "../assets/images/icons/marketing.svg"
import Seo from "../components/Seo/Seo"

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
  margin-bottom: 140px;
  padding-right: 30%;

  &:nth-child(even) {
    padding-right: 0;
    padding-left: 30%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding-right: 0;
    &:nth-child(even) {
      padding-left: 0;
    }
  }
`
const StyledNote = styled.p`
  font-size: 14px;
  color: #fff;
  padding-left: 263px;
  a {
    color: ${colors.creative};
  }
  @media (max-width: ${breakpoints.iphone}) {
    padding-left: 0;
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
const StyledNotSoWideH2 = styled(H2)`
  max-width: 80%;
  @media (max-width: ${breakpoints.iphone}) {
    max-width: 100%;
  }
`
const StyledWaterfallSection = styled(StyledSection)`
  padding-bottom: 0;
`
const StyledWaterfall = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 80px 0 0;
`
const StyledWaterfallItem = styled.div`
  position: relative;
  width: 19%;
  position: relative;
  text-align: center;
  background: ${colors.flowly};
  z-index: 1;
  &:after {
    content: " ";
    position: absolute;
    top: 50px;
    right: -55%;
    width: 70%;
    height: 1px;
    background: rgba(255, 255, 255, 0.15);
  }
  &:before {
    content: " ";
    position: absolute;
    top: 51px;
    right: -55%;
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
  }
  img {
    height: 110px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
  }
  h5 {
    margin-bottom: 20px;
  }
  &:nth-of-type(2) {
    margin-top: 120px;
  }
  &:nth-of-type(3) {
    margin-top: 240px;
  }
  &:nth-of-type(4) {
    margin-top: 360px;
  }
  &:nth-of-type(5) {
    margin-top: 480px;
    &:before,
    &:after {
      display: none;
    }
  }
`
const StyledWaterfallNote = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30%;
  right: 30%;
  height: 380px;
  border: dashed 1px rgba(255, 255, 255, 0.15);
  border-top: none;
  z-index: 0;
  p {
    position: absolute;
    width: 250px;
    left: calc(-19% - 250px);
    bottom: 80px;
    font-size: 16px;
    line-height: 24px;
    color: #8b6db1;
  }
`

const pageData = {
  heading: {
    first: "Tvoříme",
    second: "webové zážitky",
  },
  text:
    "Tým zkušených, nezávislých a kreativních profesionálů pro váš web a online marketing.",
}

const ServicesPage = ({ data }) => (
  <React.Fragment>
    <Seo
      title="Tvorba webu a internetový marketing České Budějovice | Flowly.cz"
      description="Soustředíme se na věci, které umíme nejlépe. Jsme specialisté na UX design, PPC a zbožové srovnávače, SEO a frontend development."
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
            Soustředíme se na věci,{" "}
            <span className="break">které umíme nejlépe</span>
          </H2>
          <StyledAboutText>
            Už léta se držíme každý své specializace a získáváme zkušenosti v
            oblastech:{" "}
            <strong>
              UX design, PPC a zbožové srovnávače, SEO a marketingové strategie
              a frontend development
            </strong>
            . Že potřebujete komplexní služby? Právě proto spolupracujeme s
            dalšími prověřenými odborníky z řad freelancerů i agentur.
          </StyledAboutText>
        </Container>
      </Section>
      <Section long>
        <BackgroundTriangles />
        <Container>
          <StyledServicesList>
            <StyledServiceItem>
              <H3>Internetový marketing</H3>
              <StyledIcon src={MarketingIcon} width="200" />

              <P small>
                Pomůžeme vašemu webu dostat se do podvědomí a přivést nové
                zákazníky. Máme know-how i nástroje na moderní online marketing.
              </P>
              <Ul>
                <li>Marketingové strategie</li>
                <li>SEO</li>
                <li>PPC kampaně</li>
                <li>Copywriting</li>
                <li>Zbožové srovnávače</li>
                <li>Firemní školení</li>
              </Ul>
            </StyledServiceItem>

            <StyledServiceItem>
              <H3>UX design & grafický design</H3>
              <StyledIcon src={UxIcon} width="200" />
              <P small>
                Kreativní design navržený přesně pro potřeby vašich zákazníků,
                který jednoduše funguje. Přesně toto umíme perfektně.
              </P>
              <Ul>
                <li>Produktové strategie</li>
                <li>Uživatelské testování</li>
                <li>Výzkumy & prototypy</li>
                <li>Optimalizace e-commerce</li>
                <li>Vizuální design</li>
                <li>Design mobilních aplikací</li>
              </Ul>
            </StyledServiceItem>

            <StyledServiceItem>
              <H3>
                Tvorba webových
                <br />
                stránek & aplikací
              </H3>
              <StyledIcon src={DevIcon} width="200" />
              <P small>
                Víme, jak vytvářet weby a mobilní i webové aplikace, které vám
                brzy vrátí vaši investici a pomohou dále růst
              </P>
              <Ul>
                <li>Redakční systémy</li>
                <li>Aplikace na míru</li>
                <li>Backend systémy</li>
                <li>Prezentační weby</li>
                <li>Vývoj mobilních aplikací</li>
              </Ul>
              <StyledNote>
                <Icon
                  icon={icons.NOTE}
                  leftMargin={0}
                  rightMargin={10}
                  color={colors.creative}
                  size={24}
                  altText="poznamka"
                />
                V této oblasti spolupracujeme s agenturami jako je{" "}
                <a
                  href="https://www.argo22.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Argo22</strong>
                </a>
              </StyledNote>
            </StyledServiceItem>

            <StyledServiceItem>
              <H3>
                Vývoj e-shopů
                <br />a systémů na míru
              </H3>
              <StyledIcon src={EcommerceIcon} width="200" />
              <P small>
                Potřebujete e-shop na míru? Pomůžeme vám vybrat vhodné řešení
                pro vaše potřeby a spolu s našimi prověřenými partery se pustíme
                do realizace.
              </P>
              <Ul>
                <li>Zakázkový vývoj e-commerce</li>
                <li>Spolupráce se startupy</li>
                <li>Komplexní systémy na míru</li>
                <li>Ideová validace</li>
                <li>Bussiness analytika</li>
              </Ul>
              <StyledNote>
                <Icon
                  icon={icons.NOTE}
                  leftMargin={0}
                  rightMargin={10}
                  color={colors.creative}
                  size={24}
                  altText="poznamka"
                />
                V této oblasti spolupracujeme s agenturami jako je{" "}
                <a
                  href="https://www.argo22.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Argo22</strong>
                </a>
                ,{" "}
                <a
                  href="https://www.elasticr.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Elasti.cr</strong>
                </a>
                ,{" "}
                <a
                  href="https://www.antstudio.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>ANT studio</strong>
                </a>
              </StyledNote>
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

          <Button to="/kontakt#form">
            <Icon
              icon={icons.CAFE}
              rightMargin={20}
              color="#fff"
              size={32}
              altText="kafe"
            />{" "}
            Pojďme se potkat
          </Button>
        </Container>
        <GraphicTriangles />
      </StyledSection>

      <StyledWaterfallSection long>
        <Container>
          <StyledNotSoWideH2>
            Preciznost každého produktu je pro nás to{" "}
            <span>nejdůležitější</span>
          </StyledNotSoWideH2>
          <StyledSubHeroP>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
            bibendum elit eget erat. Mauris suscipit, ligula sit amet pharetra
            semper, nibh ante cursus purus, vel sagittis velit mauris vel metus.
            Curabitur sagittis hendrerit ante. Duis condimentum augue id magna
            semper rutrum.
          </StyledSubHeroP>
        </Container>

        <Container>
          <StyledWaterfall>
            <StyledWaterfallItem>
              <img src={strategy} alt="strategie | Flowly Creative" />
              <H5>Strategie & plánování</H5>
              <P small>
                Tým závislých a kreativních profesionálů pro Váš web a
                marketing. Tým bla ble blů.
              </P>
            </StyledWaterfallItem>

            <StyledWaterfallItem>
              <img src={research} alt="výzkum | Flowly Creative" />
              <H5>Analytika & výzku</H5>
              <P small>
                Tým závislých a kreativních profesionálů pro Váš web a
                marketing. Tým bla ble blů.
              </P>
            </StyledWaterfallItem>

            <StyledWaterfallItem>
              <img src={design} alt="UX | Flowly Creative" />
              <H5>Návrh & testování</H5>
              <P small>
                Tým závislých a kreativních profesionálů pro Váš web a
                marketing. Tým bla ble blů.
              </P>
            </StyledWaterfallItem>

            <StyledWaterfallItem>
              <img src={development} alt="vývoj | Flowly Creative" />
              <H5>Vývoj & produkce</H5>
              <P small>
                Tým závislých a kreativních profesionálů pro Váš web a
                marketing. Tým bla ble blů.
              </P>
            </StyledWaterfallItem>

            <StyledWaterfallItem>
              <img src={marketing} alt="marketing | Flowly Creative" />
              <H5>Marketing</H5>
              <P small>
                Tým závislých a kreativních profesionálů pro Váš web a
                marketing. Tým bla ble blů.
              </P>
            </StyledWaterfallItem>

            <StyledWaterfallNote>
              <P>
                Nemusíte se odvolávat na množství lidí v agentuře. S námi
                jednáte napřímo. Kancelářemi jsou nám kavárny, restaurace a jiné
                obytné prostory.
              </P>
            </StyledWaterfallNote>
          </StyledWaterfall>
        </Container>
      </StyledWaterfallSection>
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
