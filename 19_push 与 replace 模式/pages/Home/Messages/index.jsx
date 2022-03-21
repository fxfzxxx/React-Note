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
  render() {
    const { messagesArray } = this.state
    return (
      <div>
        <ul>
          {messagesArray.map((message) => {
            return (
              <li key={message.id}>
                {/* 向路由组建传递 state 参数 */}
                <Link replace to={{pathname:'/home/messages/details',state:{id:message.id,title:message.title}}}>
                  {message.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <hr />
        {/*  state 参数无需声明接收 */}
        <Route path="/home/messages/details" component={Details} />
      </div>
    )
  }
}
