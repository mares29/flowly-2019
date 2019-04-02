import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../utils/breakpoints'
import Container from '../Container/Container'
import Link from '../Link/Link'
import { H2 } from '../Typography/Typography'
import TestemonialList from './TestemonialList'

const StyledTestemonialHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: flex-start;

    h2 {
      margin-bottom: 20px;
    }
  }
`
const StyledWrapper = styled.div`
  display: flex;
  margin-top: 100px;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
  }

  & > div:first-of-type {
    background: #472c6c;
  }

  & > div:nth-of-type(2) {
    background: #4c3071;
  }

  & > div:nth-of-type(3) {
    background: #513576;
  }
`

const Testemonials = ({ testemonials, showMoreLink }) => (
  <React.Fragment>
    <Container>
      <StyledTestemonialHeader>
        <H2>
          Co o nás říkají<br />
          <span>naši zákazníci?</span>
        </H2>
        {showMoreLink ? (
          <div>
            <Link to="">Prohlédnout všechny názory</Link>
          </div>
        ) : null}
      </StyledTestemonialHeader>
    </Container>

    <StyledWrapper>
      <TestemonialList testemonials={testemonials} />
    </StyledWrapper>
  </React.Fragment>
)

Testemonials.propTypes = {
  testemonials: PropTypes.array.isRequired,
  showMoreLink: PropTypes.bool,
}

export default Testemonials
