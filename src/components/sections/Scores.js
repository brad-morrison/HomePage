import React, { useState } from "react"
import styled from "styled-components"

export default function Scores() {
  const [data, setData] = useState()
  const [games, setGames] = useState([{ team1: "", score1: "" }])

  // fetches API data and passes to 'Do' function
  const fetchData = async () => {
    console.log("fetching...")
    // fetch game data
    fetch(
      "https://livescore6.p.rapidapi.com/matches/v2/list-by-league?Category=soccer&Ccd=england&Scd=premier-league",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "livescore6.p.rapidapi.com",
          "x-rapidapi-key":
            "320ce5197amsha0f6d71dc183f47p1cfe7cjsn3a347c69d08e",
        },
      }
    )
      // convert response to JSON and pass to my 'Do' function (Also print to console for debugging)
      .then(response => response.json())
      .then(_data => {
        //Do(_data)
        console.log("fetched")
        _data.Stages[0].Events.map((game, index) => {
          setGames([...games, { team1: game.T1[0].Nm, score1: game.Tr1 }])
          //console.log(game.T1[0].Nm + " " + game.Tr1)
        })

        Print(_data)
      })
  }

  // Actions performed after data is downloaded through API
  function Do(_data) {
    console.log("fetched")
    Print(_data)
    setData(_data)
  }

  function Print(obj) {
    obj === null ? console.log("blank") : console.log(obj)
  }

  function PrintData() {
    console.log(data.Stages[0].Events[0].T1[0].Nm)
  }

  function AddToGames() {
    setGames([...games, { team1: "NEW TEAM", score1: "NEW SCORE" }])
    console.log(games)
  }

  const listGames = games.map(game => <li>{game}</li>)

  return (
    <Wrapper>
      <SCR>
        <ul>{}</ul>
      </SCR>
      <button onClick={fetchData}>Get Score</button>
      <button onClick={PrintData}>Print to console</button>
      <button onClick={AddToGames}>Add to Games</button>
    </Wrapper>
  )
}

const SCR = styled.h1`
  color: white;
`

const Wrapper = styled.div`
  display: grid;
`
