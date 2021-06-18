import React, { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { CampaignName } from "./components"
import { AppState } from './app_state'

export const Game = () => {
  const {id} = useParams()
  const {currentGame, setCurrentGame } = useContext(AppState)

  useEffect(() => {
    fetch(`/v1/games/${id}`)
    .then(resp => resp.json())
    .then(setCurrentGame)
  }, [])

  return <h2>Welcome to {currentGame.name}</h2>
} 
