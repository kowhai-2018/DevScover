import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/data'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'

export default class LibraryList extends React.Component {
  render() {
    const { match } = this.props
    const { list } = match.params
    const libs = data[list]

    return (
      <div className='row'>
        <div className='twelve columns'>
          <h1>{_.startCase(list)}</h1>
          <hr />
          <Link to='/'>
            <h4><FontAwesomeIcon icon={faUndo} /></h4>
          </Link>
          <nav>
            {libs.map(lib => {
              return (
                <li key={libs.id}>
                  <Link to={`/${list}/${lib.name}`}>
                    {' '}
                    {_.startCase(lib.name)}{' '}
                  </Link>
                </li>
              )
            })}
          </nav>
        </div>
      </div>
    )
  }
}
