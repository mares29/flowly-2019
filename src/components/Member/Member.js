import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import fonts from "../../constants/fonts"
import breakpoints from "../../utils/breakpoints"
import { H3, P } from "../Typography/Typography"
import Link from "./Link"

const StyledMember = styled.article`
  position: relative;
  display: flex;
  margin-bottom: 200px;

  &:last-of-type {
    margin-bottom: 0;
  }

  .imageWrapper {
    margin-bottom: 20px;
    flex: 1;
    img {
      flex: 1;
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 40px 0;
    padding-left: 60px;

    h3 {
      margin-bottom: 22px;
    }

    .username {
      font-size: 38px;
      color: #fff;
      margin: 50px 0 60px -160px;
      z-index: 5;
      font-family: ${fonts.head.bold};
      font-style: italic;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    .content {
      padding-left: 0;
      padding-right: 60px;

      .links {
        justify-content: flex-end;
      }

      p,
      h3,
      .links div {
        text-align: right;
        justify-content: flex-end;
        align-items: center;
      }

      .username {
        margin-left: 0;
        margin-right: -160px;
      }
    }
  }

  @media (max-width: ${breakpoints.iphone}) {
    width: 100%;
    margin: 30px 0 0 0;
    flex-direction: column;

    &:nth-child(even) {
      margin: 30px 0 0 0;
      flex-direction: column;

      .content {
        padding-right: 0;
        text-align: left;

        .username {
          margin: -170px 0 60px 0;
        }
      }
    }

    .content {
      padding-left: 0;

      .username {
        margin: -170px 0 60px 0;
        line-height: 42px;
      }
    }
  }
`
const StyledLinks = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  div {
    display: flex;
    align-items: center;
    p,
    img {
      margin-bottom: 0 !important;
    }
    p strong {
      color: #fff;
    }
  }
`

const Member = ({
  firstname,
  surname,
  username,
  bio,
  links,
  position,
  photo,
}) => (
  <StyledMember>
    <div className="imageWrapper">
      <Img fluid={photo.fluid} alt={`${firstname} ${surname} - ${position}`} />
    </div>
    <div className="content">
      <p className="username">“{username}”</p>
      <P small>{bio}</P>
      <StyledLinks className="links">
        <div>
          <P small>
            <strong>Sledujte mě:</strong>
          </P>
          {links.map(url => (
            <Link key={url.value} url={url.value} />
          ))}
        </div>
      </StyledLinks>
      <H3>
        {firstname} <span>{surname}</span>
      </H3>
      <P>{position}</P>
    </div>
  </StyledMember>
)

Member.propTypes = {
  firstname: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  photo: PropTypes.object.isRequired,
}

export default Member
