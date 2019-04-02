import styled from "styled-components"
import colors from "../../constants/colors"
import breakpoints from "../../utils/breakpoints"

export default styled.a`
  display: block;
  background: ${colors.creative};
  position: relative;
  width: ${props => (props.big ? 350 : 295)}px;
  height: ${props => (props.big ? 100 : 79)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #fff;
  font-family: "bw_modelicabold";
  text-decoration: none;
  z-index: 9992;
  cursor: pointer;

  @media (max-width: ${breakpoints.iphone}) {
    width: 300px;
    height: 70px;
  }
`
