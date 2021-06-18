import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export const JoinGame = () => {

  const [games, setGames] = useState([])

  useEffect(()=> {
    fetch("/v1/games")
    .then(resp => resp.json())
    .then(games => setGames(games))
  }, [])

  return <React.Fragment>
    <h2>Games</h2>
    {games.map(game => <Link key={game.id} to={`/game/${game.id}`}> <button >Join {game.name}({game.id})</button> </Link>)}
  </React.Fragment>
} 

