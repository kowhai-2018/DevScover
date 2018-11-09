import React from 'react'
import {Link} from 'react-router-dom'
import data from '../../data/data'

export default class LibraryList extends React.Component {
  render () {
    const { match } = this.props
    const { list } = match.params
    const libs = data[list]

    console.log(libs[0])

    return (
      <div>
        <h1>{list}</h1>
        <nav>
          {libs.map(lib => {
            return (
              <li key={libs.id}>
                <Link to={`/${list}/${lib.name}`}> {lib.name} </Link>
              </li>
            )
          })}
        </nav>
      </div>
    )
  }
}
