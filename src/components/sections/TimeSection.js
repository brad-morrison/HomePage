import React, { useState, useEffect } from "react"
import DateTime from "./DateTime"

import styled from "styled-components"
import Weather from "./Weather"

export default function TimeSection() {
  return (
    <Wrapper>
      <DateTime />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 70px auto;
`
