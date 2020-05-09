import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"

const StyledClientList = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.iphone}) {
    flex-direction: column;
  }

  div {
    width: ${props => (props.horizontal ? "auto" : "50%")};
    padding: 20px 0;
    margin: 10px 0;
    text-align: right;
    opacity: 0.5;
    transition: opacity 200ms;

    @media (max-width: ${breakpoints.iphone}) {
      width: 100%;
      text-align: center;
    }

    &:hover {
      opacity: 1;
    }
  }
`

const ClientList = ({ clients, horizontal }) => {
  const allClients = clients =>
    clients.map((client, i) => {
      if (horizontal && i >= 4) return false
      return (
        <div key={i}>
          <Img fixed={client.node.logo.asset.fixed} />
        </div>
      )
    })
  return (
    <StyledClientList horizontal={horizontal}>
      {allClients(clients)}
    </StyledClientList>
  )
}

ClientList.propTypes = {
  clients: PropTypes.array.isRequired,
  horizontal: PropTypes.bool,
}

export default ClientList
