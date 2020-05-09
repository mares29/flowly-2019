import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import ClientList from "../components/Client/ClientList"
import Container from "../components/Container/Container"
import BackgroundTriangles from "../components/Graphics/BackgroundTriables"
import Column from "../components/Grid/Column"
import Row from "../components/Grid/Row"
import Hero from "../components/Hero/Hero"
import List from "../components/List/List"
import Main from "../components/Main/Main"
import RefList from "../components/Reference/RefList"
import Section from "../components/Section/Section"
import Seo from "../components/Seo/Seo"
import Testemonials from "../components/Testemonial/Testemonials"
import { H2, Hr, P } from "../components/Typography/Typography"

const StyledSection = styled(Section)`
  padding-top: 0;
  padding-bottom: 140px;
`

const pageData = {
  heading: {
    first: "Jedeme",
    second: "bomby",
  },
  text:
    "Jdeme do toho naplno a na svou práci jsme hrdí. Baví nás spolupráce s lidmi, se kterými můžeme sdílet nadšení pro věc a vzájemně se inspirovat.",
  list: [
    {
      heading: "GLS Česká republika",
      text:
        "Vytvoření přistávacích stránek pro kampaně, copywriting a grafika pro propagační materiály.",
    },
    {
      heading: "Kuboušek Holding",
      text:
        "Vytvoření hlavního webového rozcestníku firmy, optimalizace marketingových procesů a školení inhouse týmu firmy.",
    },
    {
      heading: "Equa Bank",
      text:
        "Grafické práce na propagačních a interních materiálech společnosti.",
    },

    {
      heading: "Dragon fly",
      text:
        "Kompletní redesign e-shopu jednoho z největších prodejců oblečení pro pole dance, jógu a fitness.",
    },
    {
      heading: "GoPay",
      text:
        "Spolupráce na zlepšení použitelnosti a tvorbě rozhraní interních aplikací.",
    },
    {
      heading: "Libristo",
      text:
        "Výzkum, analytika, tvorba webu mezinárodního e-shopu s nejširší nabídkou cizojazyčné literatury.",
    },
    {
      heading: "Prodej vozů Autigo.cz",
      text:
        "Analýza, výzkum a následný návrh designu a tvorba webu pro službu prodávající roční vozy.",
    },
  ],
  tips: [
    {
      heading:
        "Ještě než začneme web nebo kampaň realizovat uděláme nejvíc práce",
      text: "každé práci předchází analýza",
    },
    {
      heading: "Nepřipravíme Vám 4 návrhy designu ze kterých si vyberete",
      text:
        "nepřipravujeme různé varianty designu, ale  to nej z toho co jsme zjistili v analýzách",
    },
    {
      heading: "Tvorba webu, který má mít smysl není levná",
      text:
        "že to není levné, mraky hodin a pod.. chyby můžou být mnohem dražší",
    },
  ],
}

const ServicesPage = ({ data }) => (
  <React.Fragment>
    <Seo
      title="Naše reference? Jedeme bomy! | Flowly.cz"
      description="Rozhodně se nebojíme velkých výzev. Jdeme do toho naplno a na svou práci jsme hrdí. Baví nás spolupráce s lidmi, se kterými můžeme sdílet nadšení pro věc a vzájemně se inspirovat."
    />
    <Hero {...pageData} />
    <Main>
      <StyledSection long>
        <BackgroundTriangles right />
        <Container wide>
          <RefList references={data.allSanityProject.edges} />
        </Container>
      </StyledSection>

      <Section long>
        <Container>
          <H2>
            Rozhodně se nebojíme, <span className="break">velkých výzev</span>
          </H2>

          <Row>
            <Column>
              <List
                items={pageData.list.slice(
                  0,
                  Math.ceil(pageData.list.length / 2)
                )}
              />
            </Column>
            <Column>
              <List
                items={pageData.list.slice(Math.ceil(pageData.list.length / 2))}
              />
            </Column>
          </Row>

          <Hr />

          <ClientList clients={data.allSanityLogo.edges} horizontal />
        </Container>
      </Section>

      <Section long>
        <Testemonials testemonials={data.allSanityClient.edges} />
      </Section>

      <Section long style={{ marginBottom: 0 }}>
        <Container>
          <H2>
            Rozhodně se nebojíme <span className="break">velkých výzev</span>
          </H2>

          <P>
            Nemusíte obvolávat množství lidí v agentuře. S námi jednáte napřímo.
            Kancelářemi jsou nám kavárny, restaurace a jiné obytné prostory, za
            které k našemu potěšení neplatíme nájem. K dobře{" "}
            <strong>odvedené práci</strong> nám stačí zásuvka, počítač a heslo „
            s chutí do toho, půl je hotovo“.
          </P>

          <Row>
            <Column>
              <List items={pageData.tips} />
            </Column>
          </Row>
        </Container>
      </Section>
    </Main>
  </React.Fragment>
)

export default ServicesPage

export const projectsQuery = graphql`
  query {
    allSanityProject {
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
    allSanityClient(limit: 6) {
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
  }
`
