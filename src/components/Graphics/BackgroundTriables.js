import PropTypes from "prop-types"
import styled from "styled-components"
import TrianglesBGImg from "../../assets/images/triangles_bg.svg"

const BackgroundTriangles = styled.div`
  position: absolute;
  left: 0;
  bottom: ${props => (props.bottom ? props.bottom : "10%")};
  top: ${props => (props.top ? props.top : "10%")};
  width: 100%;
  background: url("${TrianglesBGImg}")  center center no-repeat;
  background-size: 100% 100%;
  z-index: -1;
  transform: scale(${props => (props.right ? -1 : 1)});
`

BackgroundTriangles.propTypes = {
  right: PropTypes.bool,
}

export default BackgroundTriangles
