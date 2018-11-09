import React from 'react'
import data from '../../data/data'

export default class Item extends React.Component {
  render () {
    const { match } = this.props
    const { name } = match.params
    const libs = data[name]
    // const { description } = match.params

    var found = libs.find(function (element) {
      return element === name
    })
    console.log(found)

    return (
      <div>
        <h1>{found.name}</h1>
        <p>{found.description}</p>
        <a href= {found.link}>Learn more</a>
      </div>
    )
  }
}
