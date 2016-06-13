import React from 'react'
import { Router } from 'react-router'

export default class App extends React.Component {
  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
    )
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        {this.content}
      </div>
    )
   }
}
