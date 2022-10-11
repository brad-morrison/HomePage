import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Link from "gatsby"

export default function BookmarkButton(props) {
  return (
    <Wrapper>
      <a href={props.to}>
        <ButtonWrapper>
          <img className="a" src={props.src} />
          <ButtonTitle className="b">{props.title}</ButtonTitle>
        </ButtonWrapper>
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: auto;
`

const ButtonWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 10px;
  justify-content: center;

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  img {
    height: 64px;
    width: 64px;
    object-fit: cover;
    border-radius: 20px;
    filter: brightness(80%) saturate(0%);

    -webkit-box-shadow: 0px 0px 94px 29px rgba(255, 65, 109, 0.3);
    -moz-box-shadow: 0px 0px 94px 29px rgba(255, 65, 109, 0.3);
    box-shadow: 0px 0px 20px 20px rgba(255, 65, 109, 0);
  }

  :hover {
    cursor: pointer;
  }

  :hover .a {
    filter: brightness(80%) saturate(110%);
    -webkit-box-shadow: 0px 0px 94px 29px rgba(255, 255, 109, 0.3);
    -moz-box-shadow: 0px 0px 94px 29px rgba(255, 65, 109, 0.3);
    box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.1);
  }

  :hover .b {
    color: lightgray;
    opacity: 100%;
  }
`

const ButtonTitle = styled.div`
  color: darkgray;
  opacity: 60%;
  justify-self: center;
  font-size: 0.8em;
  z-index: -1;
  transition: 0.3s ease;
`
