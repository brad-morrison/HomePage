import React, { useState, useEffect } from "react"
import styled from "styled-components"

export const DateTime = () => {
  var [date, setDate] = useState(new Date())
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dateEndings = [
    "st", //1
    "nd", //2
    "rd", //3
    "th", //4
    "th", //5
    "th", //6
    "th", //7
    "th", //8
    "th", //9
    "th", //10
    "th", //11
    "th", //12
    "th", //13
    "th", //14
    "th", //15
    "th", //16
    "th", //17
    "th", //18
    "th", //19
    "th", //20
    "st", //21
    "nd", //22
    "rd", //23
    "th", //24
    "th", //25
    "th", //26
    "th", //27
    "th", //28
    "th", //29
    "th", //30
    "st", //31
  ]

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <Wrapper>
      <h1>{date.toLocaleTimeString("en-GB", {})}</h1>
      <DateWrapper>
        <h3 className="day">{days[date.getDay() - 1]}</h3>

        <h3>
          {date.getDate()}
          {dateEndings[date.getDate() - 1]}
        </h3>
        <h3>{monthNames[date.getMonth()]}</h3>
        <h3>{date.getFullYear()}</h3>
      </DateWrapper>
    </Wrapper>
  )
}

export default DateTime

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-top: 180px;

  h1 {
    color: darkgray;
    text-align: center;
    font-family: "Source Code Pro", monospace;
    font-size: 3em;
  }

  h3 {
    text-align: center;
    color: darkgray;
  }
`

const DateWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto auto;
  gap: 10px;
  margin-top: 30px;

  .day {
    grid-column: 1 / span 3;
    font-size: 3em;
  }

  h3 {
    color: darkgray;
    font-family: "Source Code Pro", monospace;
    font-size: 1.6em;
  }
`
