import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"
import { Hr } from "../Typography/Typography"
import MemberRow from "./MemberRow"

const StyledPeopleList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 50px;

  @media (max-width: ${breakpoints.iphone}) {
    margin: 50px 0 25px;
  }
`

const MemberRowList = ({ people }) => {
  const resolveBorder = i => {
    if (i % 2 === 0) return <Hr />
    return <Hr reversed />
  }
  const allPeople = people.map((node, i) => {
    const man = node.node
    return (
      <React.Fragment key={man.email}>
        <MemberRow
          firstname={man.name}
          surname={man.surname}
          position={man.position}
          phone={man.phone}
          email={man.email}
          photo={man.cover.asset}
        />
        {i + 1 < people.length ? resolveBorder(i) : null}
      </React.Fragment>
    )
  })
  return <StyledPeopleList>{allPeople}</StyledPeopleList>
}

MemberRowList.propTypes = {
  people: PropTypes.array.isRequired,
}

export default MemberRowList
