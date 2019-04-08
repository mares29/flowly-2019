import PropTypes from "prop-types"
import styled from "styled-components"
import TrianglesBGImg from "../../assets/images/triangles_bg.svg"

const BackgroundTriangles = styled.div`
  position: absolute;
  left: 0;
  bottom: 10%;
  width: 100%;
  height: ${props => (props.height ? props.height : "80%")};
  background: url("${TrianglesBGImg}")  center center no-repeat;
  background-size: 100% 100%;
  z-index: -1;
  transform: scale(${props => (props.right ? -1 : 1)});
`

BackgroundTriangles.propTypes = {
  right: PropTypes.bool,
}

export default BackgroundTriangles
