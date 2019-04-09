import styled from "styled-components"
import colors from "../../constants/colors"

export default styled.input`
  position: relative;
  border: none;
  width: 100%;
  background: transparent;
  padding: 10px 0 11px;
  border-bottom: solid 1px ${colors.creative};
  color: #b093d6;
  margin-bottom: 40px;
  outline: none;
  transition: all 200ms;

  &:focus {
    border-bottom: solid 2px ${colors.creative};
    padding: 10px 0 10px;
    color: ${colors.creative};
  }
`
