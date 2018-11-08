import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
// import Nav from './Nav'
// import List from './List'
// import Item from './Item'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        {/* <Router path='/list' component={List} /> */}
      </div>
    </Router>
  )
}

export default App
