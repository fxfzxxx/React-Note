import PropTypes from "prop-types"
import React, { Component } from "react"
import "./index.css"

export default class Item extends Component {
  render() {
    console.log(this.props)
    return <h3>我是About的内容</h3>
  }
}
