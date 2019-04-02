import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../utils/breakpoints'
import { H3 } from '../Typography/Typography'

const StyledMember = styled.article`
  background-color: ${props => props.bgColor};
  background-size: contain;
  width: 48%;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;

  &:nth-child(even) {
    margin: 60px 0 0 2%;
  }

  @media (max-width: ${breakpoints.ipad}) {
    width: 100%;
    margin: 30px 0 0 0;

    &:nth-child(even) {
      margin: 30px 0 0 0;
    }
  }

  p {
    color: #fff;
    font-size: 26px;
  }

  .imageWrapper {
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
`

const MemberCard = ({ firstname, surname, position, photo }) => (
  <StyledMember>
    <div className="imageWrapper">
      <Img sizes={photo.sizes} alt={`${firstname} ${surname} - ${position}`} />
    </div>
    <H3>
      {firstname} <span>{surname}</span>
    </H3>
    <p>{position}</p>
  </StyledMember>
)

MemberCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  photo: PropTypes.object.isRequired,
}

export default MemberCard
