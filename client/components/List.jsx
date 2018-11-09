import React from 'react'
import {Link} from 'react-router-dom'
import data from '../../data/data'

export default class LibraryList extends React.Component {
    render () {
        const { match } = this.props
        const { list } = match.params
        const libs = data[list]
        libsList = libs.map(x => x.name)

        console.log(libsList)
      
        return (
          <div>
              <h1>{list}</h1>
            <nav>
              {libsList.map(lib => {
                return (
                  <li>
                    <Link to={`/${list}/${lib.name}`}> {lib.name} </Link>
                  </li>
                )
              })}
            </nav>
          </div>
        )
    }
}