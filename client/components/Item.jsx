import React from 'react'
import data from '../../data/data'

export default class Item extends React.Component {
  render () {
    // const { match } = this.props
    console.log(this.props.match.params)
    const { list: name } = this.props.match.params
    const libs = data[name]
    // const { description } = match.params
    // console.log(data)
    console.log(libs)
    var found = libs.find(function (item) {
      return item == name.item
    })

    return (
      <div>
        <h1>{found.name}</h1>
        <p>{found.description}</p>
        <a href= {found.link}>Learn more</a>
      </div>
    )
  }
}

