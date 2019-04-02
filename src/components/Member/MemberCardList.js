import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"
import MemberCard from "./MemberCard"

const StyledPeopleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 100px 0 50px;

  @media (max-width: ${breakpoints.iphone}) {
    margin: 50px 0 25px;
  }
`

const MemberCardList = ({ people }) => {
  const allPeople = people.map((node, i) => {
    const man = node.node
    return (
      <MemberCard
        key={i}
        firstname={man.name.value}
        surname={man.surname.value}
        position={man.position.value}
        photo={man.photo.value.childImageSharp}
      />
    )
  })
  return <StyledPeopleList>{allPeople}</StyledPeopleList>
}

MemberCardList.propTypes = {
  people: PropTypes.array.isRequired,
}

export default MemberCardList
