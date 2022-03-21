import React, { Component } from "react"
import { withRouter } from "react-router-dom"
class Header extends Component {
  forward = () => {
    this.props.history.goForward()
  }
  back = () => {
    this.props.history.goBack()
  }
  go = () => {
    this.props.history.go(2)
  }
  render() {
    return (
      <div className="page-header">
        <button onClick={this.back}> 回退</button>
        <button onClick={this.forward}> 前进 </button>
        <button onClick={this.go}> 前进两页 </button>
        <h2>React Router Demo</h2>
      </div>
    )
  }
}
export default withRouter(Header)
