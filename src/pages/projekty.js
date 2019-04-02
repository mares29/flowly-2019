import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import ClientList from "../components/Client/ClientList"
import Container from "../components/Container/Container"
import Column from "../components/Grid/Column"
import Row from "../components/Grid/Row"
import Hero from "../components/Hero/Hero"
import List from "../components/List/List"
import Main from "../components/Main/Main"
import RefList from "../components/Reference/RefList"
import Section from "../components/Section/Section"
import Testemonials from "../components/Testemonial/Testemonials"
import BackgroundTriangles from "../components/Triangle/BackgroundTriables"
import { H2, Hr, P } from "../components/Typography/Typography"
import { clients } from "../utils/fakeData"

const StyledSection = styled(Section)`
  padding-top: 0;
  padding-bottom: 140px;
`

const pageData = {
  heading: {
    first: "Jedeme",
    second: "bomby, které inspirují",
  },
  text:
    "Tým nezávislých a kreativních profesionálů pro Váš web & marketing. Tým nezávislých a kreativních profesionálů pro Váš web & marketing",
  list: [
    {
      heading: "GLS Česká republika",
      text:
        "Nemusíte obvolávat množství lidí v agentuře. S námi jednáte napřímo. Kancelářemi jsou nám kavárny, restaurace a jiné obytné prostory,",
    },
    {
      heading: "GLS Česká republika",
      text:
        "Nemusíte obvolávat množství lidí v agentuře. S námi jednáte napřímo. Kancelářemi jsou nám kavárny, restaurace a jiné obytné prostory,",
    },
    {
      heading: "GLS Česká republika",
      text:
        "Nemusíte obvolávat množství lidí v agentuře. S námi jednáte napřímo. Kancelářemi jsou nám kavárny, restaurace a jiné obytné prostory,",
    },
  ],
}

const ServicesPage = ({ data }) => (
  <div>
    <Hero {...pageData} />
    <Main>
      <StyledSection long>
        <BackgroundTriangles right />
        <Container wide>
          <RefList references={data.allCockpitProject.edges} />
        </Container>
      </StyledSection>

      <Section long>
        <Container>
          <H2>
            Rozhodně se nebojíme, <span className="break">velkých výzev</span>
          </H2>

          <Row>
            <Column>
              <List items={pageData.list} />
            </Column>
            <Column>
              <List items={pageData.list} />
            </Column>
          </Row>

          <Hr />

          <ClientList clients={clients} horizontal />
        </Container>
      </Section>

      <Section long>
        <Testemonials testemonials={data.allCockpitClient.edges} />
      </Section>

      <Section long style={{ marginBottom: 0 }}>
        <Container>
          <H2>
            Rozhodně se nebojíme, <span className="break">velkých výzev</span>
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
              <List items={pageData.list} />
            </Column>
          </Row>
        </Container>
      </Section>
    </Main>
  </div>
)

export default ServicesPage

export const projectsQuery = graphql`
  query {
    allCockpitProject {
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
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    allCockpitClient(limit: 6) {
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
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
