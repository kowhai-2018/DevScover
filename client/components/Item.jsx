import React from 'react'
import data from '../../data/data'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'

const Item = ({ match }) => {
  const { list, item } = match.params
  const found = data[list].filter(item => item.name === name)

  return (
    <div className='row'>
      <div className='twelve columns'>
        <h1>{_.startCase(list)}</h1>
        <hr />
        <h1>{item}</h1>
        <p>The description will go here for the selected item... at some stage.</p>
        <a href={found.link}>Learn more</a>
        <hr/>
        <Link to='/'>
          <h4>
            <FontAwesomeIcon icon={faUndo} />
          </h4>
        </Link>
      </div>
    </div>
  )
}

export default Item
