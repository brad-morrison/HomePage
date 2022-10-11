import React, { useState, useEffect, Component } from "react"
import styled from "styled-components"
import ReactWeather, { useOpenWeather } from "react-open-weather"
import { geolocated } from "react-geolocated"

export default function Weather() {
  const [temp, setTemp] = useState(0)
  const [name, setName] = useState("")
  const [region, setRegion] = useState("")
  const [tempFeels, setTempFeels] = useState(0)
  const [desc, setDesc] = useState("")
  const [icon, setIcon] = useState("")

  useEffect(() => {
    // Get weather data from location
    const url = `https://api.weatherapi.com/v1/current.json?key=d7b9f378c7e742cc821223403220903&q=gauldry&aqi=no
    `
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        // set variables
        setName(json.location.name)
        setRegion(json.location.region)
        setTemp(json.current.temp_c)
        setTempFeels(json.current.feelslike_c)
        setDesc(json.current.condition.text)
        setIcon(json.current.condition.icon)
      } catch (error) {
        console.log("error", error)
      }
    }

    fetchData()
  })

  // display data
  return (
    <Wrapper>
      <ContentWrapper>
        <IconContainer>
          <img src={icon} />
        </IconContainer>
        <Data>
          <LocationText>
            <h1>{name},</h1>
            <h1>{region}</h1>
          </LocationText>
          <h1 className="weather-type">{desc}</h1>
          <Temperatures>
            <TempContainer>
              <p>temp</p>
              <h1>{temp}</h1>
            </TempContainer>
            <FeelsContainer>
              <p>feels</p>
              <h1>{tempFeels}</h1>
            </FeelsContainer>
          </Temperatures>
        </Data>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`

const ContentWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 12px;
  color: lightgray;
`

const LocationText = styled.div`
  display: flex;
  gap: 6px;
  font-family: "Source Code Pro", monospace;
  font-size: 1em;
  justify-content: start;
  align-items: center;
`

const Data = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 5px;
  .weather-type {
    font-family: "Source Code Pro", monospace;
    color: rgb(95, 95, 95);
    grid-column: 1 / span 2;
    font-weight: 600;
  }
`

const IconContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  img {
    padding: 8px;
    width: 80px;
    height: 80px;
    background-color: rgb(27, 27, 27);
    border-radius: 8px;
    object-fit: cover;
  }
`
const Temperatures = styled.div`
  display: flex;
  gap: 20px;
  grid-template-columns: auto auto;
`

const TempContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2px;
  font-family: "Source Code Pro", monospace;

  p {
    font-size: 0.7em;
  }

  h1 {
    font-size: 1.2em;
  }
`

const FeelsContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2px;
  font-family: "Source Code Pro", monospace;

  p {
    font-size: 0.7em;
    text-align: center;
  }

  h1 {
    font-size: 1.2em;
    text-align: center;
  }
`
