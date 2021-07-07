import React, { useState, useContext } from "react"
import { render } from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { Button } from "mini.css-react"
import { AppState } from './app_state'
import { Title, Buttons } from "./components"
import { NewGame } from './new_game'
import { JoinGame } from './join_game'
import { Game } from './game'

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

const App = () => {
  const [campaignName, setCampaignName] = useState('')
  const [currentGame, setCurrentGame] = useState({})
  const [messages, setMessages] = useState([])

  return <Router>
    <AppState.Provider value={{ campaignName, setCampaignName, currentGame, setCurrentGame, messages, setMessages }}>
      <Title />
      <div>
        <Switch>
          <Route path="/new">
            <NewGame />
          </Route>
          <Route path="/join">
            <JoinGame />
          </Route>
          <Route path="/game/:id">
            <Game />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Buttons />
    </AppState.Provider>
  </Router>
}

render(<App />, document.getElementById("app"))
