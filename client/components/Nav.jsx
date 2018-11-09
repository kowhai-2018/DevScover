import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/data'
import _ from 'lodash'

const navList = Object.keys(data)

class Nav extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <nav>
          {navList.map(navList => {
            return (<li> <Link to={`/${navList}`}> {_.startCase(navList)} </Link></li>) 
          })}
        </nav>
      </div>
    )
  }
}

export default Nav
