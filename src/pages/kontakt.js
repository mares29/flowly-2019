import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Button from "../components/Button/Button"
import Container from "../components/Container/Container"
import Form from "../components/Form/Form"
import Input from "../components/Form/Input"
import Textarea from "../components/Form/Textarea"
import Column from "../components/Grid/Column"
import Row from "../components/Grid/Row"
import Hero from "../components/Hero/Hero"
import Main from "../components/Main/Main"
import MemberRowList from "../components/Member/MemberRowList"
import Section from "../components/Section/Section"
import { H2, P } from "../components/Typography/Typography"
import breakpoints from "../utils/breakpoints"

const StyledAboutText = styled(P)`
  width: 1000px;

  @media (max-width: ${breakpoints.iphone}) {
    width: 100%;
  }
`
const StyledMap = styled.div`
  width: 100%;
  height: 65vh;
  opacity: 0.6;
`
const FormButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`
const FormButton = Button.withComponent("button")
const StyledFormButton = styled(FormButton)`
  bottom: -40px;

  @media (max-width: ${breakpoints.iphone}) {
    bottom: -30px;
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

      <Section long>
        <Container>
          <H2>
            Kudy se <span className="break">k nám dostanete?</span>
          </H2>
        </Container>

        <StyledMap />
      </Section>

      <Section long>
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

          <Form name="kontakt" netlify>
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
