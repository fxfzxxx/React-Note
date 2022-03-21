import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  // static propTypes = {second: third}

  render() {
    return (
      <div className="card">
            <a href={this.props.html_url} target="_blank">
              <img
                src={this.props.avatar_url}
                style={{width: '100px'}}
              />
            </a>
            <p className="card-text">{this.props.login}</p>
          </div>
    )
  }
}
