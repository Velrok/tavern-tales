import React, { useState, useContext } from "react"
import { render } from "react-dom"
import { NewGame } from './new_game'
import { JoinGame } from './join_game'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { Button } from "mini.css-react"
import { AppState } from './app_state'

const Home = () => <React.Fragment>
  <Link to="/new">
    <Button className="primary">
    New game
    </Button >
  </Link>
  <Link to="/join">
    <Button>
    Join game
    </Button >
  </Link>
</React.Fragment>

const Title = () => <Link to="/">
  <h1 fontSize={5} >Tavern Tales</h1>
</Link>

const CampaignName = () => {
  const {campaignName} = useContext(AppState)
  return <span>Welcome to {campaignName}</span>
}

const App = () => {
  const [campaignName, setCampaignName] = useState('')
  return <Router>
    <AppState.Provider value={{campaignName, setCampaignName }}>
      <Title />
      <CampaignName />
      <Switch>
        <Route path="/new">
          <NewGame />
        </Route>
        <Route path="/join">
          <JoinGame />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </AppState.Provider>
  </Router>
}

render(<App/>, document.getElementById("app"))
