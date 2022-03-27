import React, { Component } from "react"
import Count from './component/Count'
import { Button } from "antd"
import "antd/dist/antd.css"

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
      </div>
    )
  }
}
