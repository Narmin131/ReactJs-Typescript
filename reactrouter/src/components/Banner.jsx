import React, { Component } from 'react'
class Banner extends Component {
  render() {
    return (
      <section className='banner'>
          <h1>{this.props.title}</h1>
      </section>
    )
  }
}

export default Banner