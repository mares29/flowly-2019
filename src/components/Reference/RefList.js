import React from "react"
import styled from "styled-components"
import Ref from "./Ref"

const StyledRefs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const RefList = ({ references }) => {
  const allRefs = references.map((reference, i) => {
    const ref = reference.node
    return (
      <Ref
        key={i}
        title={ref.title.value}
        colorText={ref.textColor.value}
        colorBg={ref.bgColor.value}
        image={ref.thumbnail.childImageSharp}
        link=" "
      />
    )
  })
  return <StyledRefs>{allRefs}</StyledRefs>
}

export default RefList
