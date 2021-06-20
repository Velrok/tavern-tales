import React, { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { CampaignName, Chat } from "./components"
import { AppState } from './app_state'

export const Game = () => {
  const {id} = useParams()
  const {currentGame, setCurrentGame, messages, setMessages} = useContext(AppState)

  const fetchMessages = () => {
    fetch(`/v1/games/${id}/messages`)
      .then(resp => resp.json())
      .then(setMessages)
  }

  useEffect(() => {
    fetch(`/v1/games/${id}`)
      .then(resp => resp.json())
      .then(setCurrentGame)
  }, [])

  useEffect(() => {
    const i = setInterval(fetchMessages, 1000)
    return () => clearInterval(i)
  }, [])

  return <React.Fragment>
    <h2>Welcome to {currentGame.name}</h2>
    <Chat
      onMessageSent={fetchMessages}
      currentGame={currentGame}
      messages={messages}/>
  </React.Fragment>
} 
