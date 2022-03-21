import React, { Component } from "react"
import Details from "./Details"
import { Route, Link } from "react-router-dom"

export default class Messages extends Component {
  state = {
    messagesArray: [
      { id: "01", title: "message1" },
      { id: "02", title: "message2" },
      { id: "03", title: "message3" },
    ],
  }
  //state 参数传递, params 和 search 直接传一个参数就好
  pushClick = (id,title) => {
    this.props.history.push('/home/messages/details',{ id, title })
  }
  replaceClick = (id,title) => {
    this.props.history.replace('/home/messages/details',{ id, title })
  }
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
    const { messagesArray } = this.state
    return (
      <div>
        <ul>
          {messagesArray.map((message) => {
            return (
              <li key={message.id}>
                {/* 向路由组建传递 state 参数 */}
                <Link to={{ pathname: '/home/messages/details', state: { id: message.id, title: message.title } }}>
                  {message.title}</Link>
                <button onClick={() => { this.pushClick(message.id, message.title) }}>push</button>
                <button onClick={() => { this.replaceClick(message.id, message.title) }}>replace</button>
              </li>
            )
          })}
        </ul>
        <hr />
        {/*  state 参数无需声明接收 */}
        <Route path="/home/messages/details" component={Details} />
        <button onClick={this.back}> 回退</button>
        <button onClick={this.forward}> 前进 </button>
        <button onClick={this.go}> 前进两页 </button>
      </div>
    )
  }
}
