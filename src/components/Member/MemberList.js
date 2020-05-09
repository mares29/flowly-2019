import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"
import Member from "./Member"

const StyledPeopleList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 50px;

  @media (max-width: ${breakpoints.iphone}) {
    margin: 50px 0 25px;
  }
`

const MemberList = ({ people }) => {
  const allPeople = people.map((node, i) => {
    const man = node.node
    return (
      <Member
        key={i}
        firstname={man.name}
        surname={man.surname}
        username={man.username}
        bio={man.text}
        links={man.links}
        position={man.position}
        photo={man.cover.asset}
      />
    )
  })
  return <StyledPeopleList>{allPeople}</StyledPeopleList>
}

MemberList.propTypes = {
  people: PropTypes.array.isRequired,
}

export default MemberList
