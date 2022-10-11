import { func } from "prop-types"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

export default function Name() {
  var gamesTemp = [{}]
  const [games, setGames] = useState([{}])
  const [fetched, setFetched] = useState(false)
  const [manuGames, setManuGames] = useState([{}])

  useEffect(() => {
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
        .then(data => {
          console.log("fetched")
          setFetched(true)
          console.log(data)
          // populate temp array
          data.Stages[0].Events.map((game, index) =>
            gamesTemp.push({
              team1: game.T1[0].Nm,
              team2: game.T2[0].Nm,
              score1: game.Tr1,
              score2: game.Tr2,
              played: game.Eps,
            })
          )
          // copy data into state array for refresh
          setGames(gamesTemp)
          console.log(gamesTemp)
        })
    }

    fetchData()
  }, []) // the [] tells the useEffect to run only once at the start

  const gamesList = games.map(game =>
    //game.team1 == "Manchester United" || game.team2 == "Manchester United" ? (
    game.played == "NS" &&
    (game.team1 == "Manchester United" || game.team2 == "Manchester United") ? (
      game.team1 == "Manchester United" ? (
        <li>(h) {game.team2}</li>
      ) : (
        <li>(a) {game.team1}</li>
      )
    ) : (
      <div></div>
    )
  )

  function FilterManuGames() {
    return (
      <div>
        <h1>HI</h1>
      </div>
    )
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <List>
          <h3>Manchester United Fixtures</h3>
          <ul>{gamesList}</ul>
        </List>
      </ContentWrapper>
    </Wrapper>
  )
}

const List = styled.div`
  color: lightgray;
  text-align: center;
  margin: auto;
  font-size: 0.9em;
  font-family: "Source Code Pro", monospace;

  ul {
    text-align: center;
  }

  li {
    text-align: left;
  }

  h3 {
    font-size: 0.9em;
    margin-bottom: 10px;
    font-weight: 800;
  }
`

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 30px;
`
