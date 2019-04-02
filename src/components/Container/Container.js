import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"

export default styled.div`
  position: relative;
  width: ${props => (props.wide ? "1624px" : "1160px")};
  padding: ${props => (props.wide ? "0 40px" : "0")};
  @media (max-width: ${breakpoints.largeDesktop}) {
    width: 100%;
    padding: 0 40px;
  }
  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    padding: 0 20px;
  }
`
