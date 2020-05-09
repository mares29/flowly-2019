import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"
import ClientList from "../Client/ClientList"
import { H3, P } from "../Typography/Typography"

const StyledLogosWrap = styled.div`
  display: flex;
  margin-top: 140px;

  @media (max-width: ${breakpoints.iphone}) {
    flex-direction: column;
  }

  .content {
    width: 400px;
    margin-right: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: ${breakpoints.iphone}) {
      width: 100%;
    }
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
        Nebojíme se
        <br />
        <span>velkých úkolů</span>
      </H3>
      <StyledLogosText>
        Vybíráme si projekty, které mají smysl, pro které se můžeme nadchnout a
        posouvají nás dál v tom, co děláme.
      </StyledLogosText>
    </div>
    <ClientList clients={clients} />
  </StyledLogosWrap>
)

Clients.propTypes = {
  clients: PropTypes.array.isRequired,
}

export default Clients
