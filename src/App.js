import React from "react"
import Beer from "./components/Beer"
import { BrowserRouter as Router, Route } from "react-router-dom"
import BeerDetail from "./components/BeerDetail"

const App = () => {
  return (
    <React.Fragment>
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Route exact path="/" component={Beer} />
        <Route exact path="/beers/:id" component={BeerDetail} />
      </Router>
    </React.Fragment>
  )
}

export default App
