import React, { useState } from "react"
import { render } from "react-dom"
import { NewGame } from './new_game'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const Home = () => <React.Fragment>
  <Link to="/new">
    <button >
    New game
    </button >
  </Link>
  <Link to="/join">Join game</Link>
</React.Fragment>

const Title = () => <h1>Tavern Tales</h1>

const JoinGame = () => <h2>Join Game</h2>

const App = () => {
  return <Router>
    <Title />
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
  </Router>
}

render(<App/>, document.getElementById("app"))
