import React from 'react'
import Link from 'react-router-dom'
import data from '../../data/data'

export default class LibraryList extends React.Component {
    render () {
        const { match } = this.props
        const { category } = match.params
        const libs = data[category]
      
        console.log(libs)
      
        return (
          <div>
              <h1>{library}</h1>
            <nav>
              {libs.map(lib => {
                return (
                  <li>
                    <Link to={`/${library}/${lib.name}`}> {lib.name} </Link>
                  </li>
                )
              })}
            </nav>
          </div>
        )
    }
}