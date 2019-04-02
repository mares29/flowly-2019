import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"

export default styled.form`
  padding: 80px 40px 0;
  margin: 80px 0 100px;
  background: #4d3772;
  box-shadow: 0 34px 58px rgba(0, 0, 0, 0.1), 0 10px 90px rgba(0, 0, 0, 0.07);

  @media (max-width: ${breakpoints.iphone}) {
    padding: 40px 20px 0;
    margin: 40px 0 50px;
  }
`
