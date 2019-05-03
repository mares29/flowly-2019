import styled from "styled-components";
import TrianglesImg from "../../assets/images/triangles_services.svg";

const StyledTriangles = styled.div`
  position: absolute;
  right: ${props => (props.position === "left" ? "auto" : "16%")};
  left: ${props => (props.position === "left" ? "-6%" : "auto")};
  bottom: ${props => (props.bottom ? props.bottom : "5%")};;
  width: ${props => (props.position === "left" ? "50%" : "40%")};
  height: 100%;
  background: url(${TrianglesImg}) center no-repeat;
  background-size: contain;
  opacity: ${props => (props.opacity ? props.opacity : 0.3)};
`

export default StyledTriangles
