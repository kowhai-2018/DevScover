import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/data'

const navItems = Object.keys(data)

class Nav extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <nav>
          <h1>Nav bar</h1>
          {navItems.map(navItem => {
            return (<li> <Link to='/list'> {navItem} </Link></li>) 
          })}
        </nav>
      </div>
    )
  }
}

export default Nav
