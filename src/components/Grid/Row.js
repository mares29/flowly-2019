import React from "react"
import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"

const StyledRow = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.iphone}) {
    flex-direction: column;
  }
`

const Row = ({ children }) => <StyledRow>{children}</StyledRow>

export default Row
