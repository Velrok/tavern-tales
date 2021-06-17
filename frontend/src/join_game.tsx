import React, { useState, useEffect } from "react"

export const JoinGame = () => {

  const [games, setGames] = useState([])

  useEffect(()=> {
    fetch("/v1/games")
    .then(resp => resp.json())
    .then(games => setGames(games))
  }, [])

  return <React.Fragment>
    <h2>Games</h2>
    <ul>
    {games.map(game => <li key={game.id}>{game.name}({game.id})</li>)}
    </ul>
  </React.Fragment>
} 

