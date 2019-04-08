import styled from "styled-components"
import TrianglesImg from "../../assets/images/triangles_services.svg"

const StyledTriangles = styled.div`
  position: absolute;
  right: 16%;
  bottom: 5%;
  width: 40%;
  height: 100%;
  background: url(${TrianglesImg}) center no-repeat;
  background-size: contain;
  opacity: ${props => (props.opacity ? props.opacity : 0.3)};
`

export default StyledTriangles
