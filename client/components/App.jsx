import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/' component={Nav} />
      </div>
    </Router>
  )
}

export default App
