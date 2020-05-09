import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import colors from "../../constants/colors"
import fonts from "../../constants/fonts"
import breakpoints from "../../utils/breakpoints"
import { P } from "../Typography/Typography"

const StyledMember = styled.article`
  background-color: ${props => props.bgColor};
  background-size: contain;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  padding-left: 70px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }

  & > div {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    @media (max-width: ${breakpoints.iphone}) {
      justify-content: flex-start;
    }
  }

  @media (max-width: ${breakpoints.iphone}) {
    width: 100%;
    margin: 30px 0 0 0;
    flex-direction: column;
    padding-left: 0px;

    &:nth-child(even) {
      margin: 30px 0 0 0;
    }
  }

  p {
    color: #fff;
    font-size: 26px;
  }

  .imageWrapper {
    margin-right: 40px;
    flex: none;

    img {
      width: 100%;
      border-radius: 50%;
    }

    &:before {
      content: " ";
      position: absolute;
      top: 70px;
      left: 0;
      width: 44px;
      height: 5px;
      background: ${colors.creative};
    }

    @media (max-width: ${breakpoints.iphone}) {
      margin-bottom: 20px;
      padding-left: 70px;

      &:before {
        content: " ";
        position: absolute;
        top: 70px;
        left: 0;
        width: 44px;
        height: 5px;
        background: ${colors.creative};
      }
    }
  }

  .nameWrapper {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 40%;

    @media (max-width: ${breakpoints.iphone}) {
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 20px;
    }
  }
`
const StyledName = styled(P)`
  font-family: ${fonts.head.bold};
  margin-bottom: 10px;
`
const StyledContact = StyledName
const StyledPosition = styled(P)`
  font-size: 14px;
  margin: 0;
`

const MemberRow = ({ firstname, surname, position, photo, phone, email }) => (
  <StyledMember>
    <div className="imageWrapper">
      <Img fixed={photo.fixed} alt={`${firstname} ${surname} - ${position}`} />
    </div>
    <div className="nameWrapper">
      <StyledName>
        {firstname} <span>{surname}</span>
      </StyledName>
      <StyledPosition>{position}</StyledPosition>
    </div>
    <div>
      <StyledContact>{phone}</StyledContact>
    </div>
    <div>
      <StyledContact>{email}</StyledContact>
    </div>
  </StyledMember>
)

MemberRow.propTypes = {
  firstname: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  photo: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default MemberRow
