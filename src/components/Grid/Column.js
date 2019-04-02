import React from "react"
import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"

const StyledColumn = styled.div`
  flex: 1;
  padding-right: 40px;
  &:last-child {
    padding-right: 0;
  }

  @media (max-width: ${breakpoints.iphone}) {
    padding-right: 0;
  }
`

const Column = ({ children }) => <StyledColumn>{children}</StyledColumn>

export default Column
