import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import ClientList from '../Client/ClientList'
import { H3, P } from '../Typography/Typography'

const StyledLogosWrap = styled.div`
  display: flex;
  margin-top: 140px;

  .content {
    width: 400px;
    margin-right: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`

const StyledLogosText = styled(P)`
  font-size: 18px;
  line-height: 25px;
`

const Clients = ({ clients }) => (
  <StyledLogosWrap>
    <div className="content">
      <H3>
        Nebojíme se<br />
        <span>velkých úkolů</span>
      </H3>
      <StyledLogosText>
        Nemusíte obvolávat množství lidí v agentuře. S námi jednáte napřímo. Kancelářemi jsou nám kavárny, restaurace a
        jiné obytné prostory,
      </StyledLogosText>
    </div>
    <ClientList clients={clients} />
  </StyledLogosWrap>
)

Clients.propTypes = {
  clients: PropTypes.array.isRequired,
}

export default Clients
