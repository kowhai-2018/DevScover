import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import List from './List'
import Item from './Item'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/' component={Nav} />
        <Route path='/:list' component={List} />
        <Route path='/:list/:item' component={Item} />
      </div>
    </Router>
  )
}

export default App
