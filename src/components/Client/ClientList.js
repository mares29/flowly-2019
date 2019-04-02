import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledClientList = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    width: ${props => (props.horizontal ? 'auto' : '50%')};
    padding: 20px 0;
    text-align: right;
  }
`

const ClientList = ({ clients, horizontal }) => {
  const allClients = clients.map((node, i) => {
    if (horizontal && i >= 4) return false
    const man = node
    return (
      <div key={i}>
        <img src={man.logo} width="240" alt="" />
      </div>
    )
  })
  return <StyledClientList horizontal={horizontal}>{allClients}</StyledClientList>
}

ClientList.propTypes = {
  clients: PropTypes.array.isRequired,
  horizontal: PropTypes.bool,
}

export default ClientList
