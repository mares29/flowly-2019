import styled from 'styled-components'

import breakpoints from '../../utils/breakpoints'

export default styled.section`
  height: ${props => (props.long ? 'auto' : '100vh')};
  padding: ${props => (props.long ? '80px 0' : '0')};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${breakpoints.iphone}) {
    height: auto;
    padding: 60px 0;
  }
`
