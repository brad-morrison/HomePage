import React, { useEffect, useState } from "react"
import styled from "styled-components"

export default function FooterBasic() {
  //const date = new Date()

  return (
    <Wrapper>
      <ContentWrapper>
        <p>Created by Bradley Morrison {new Date().getFullYear()} &copy;</p>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 100px;
`
const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  p {
    color: darkgray;
    padding: 8px 14px;
    border-radius: 20px;
    background-color: rgb(32, 32, 32);

    font-family: "Source Code Pro", monospace;
    font-size: 0.8em;
  }
`
