import React, { useState } from "react"
import { render } from "react-dom"
import { NewGame } from './new_game'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { Button } from "mini.css-react"

const Home = () => <React.Fragment>
  <Link to="/new">
    <Button class="primary">
    New game
    </Button >
  </Link>
  <Link to="/join">
    <Button>
    Join game
    </Button >
  </Link>
</React.Fragment>

const Title = () => <h1 fontSize={5} >Tavern Tales</h1>

const JoinGame = () => <h1 fontSize={5} >Join Game</h1>

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
