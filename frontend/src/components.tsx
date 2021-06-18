import React, { useContext } from "react"
import { AppState } from './app_state'
import { Link } from "react-router-dom"

export const Title = () => <Link to="/">
  <h1 fontSize={5} >Tavern Tales</h1>
</Link>

export const CampaignName = () => {
  const {campaignName} = useContext(AppState)
  return <h2>Welcome to {campaignName}</h2>
}

