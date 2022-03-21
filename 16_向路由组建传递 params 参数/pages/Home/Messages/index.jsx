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
                {/* 向路由组建传递 params 参数 */}
                <Link to={`/home/messages/details/${message.id}/${message.title}`}>
                  {message.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <hr />
        {/*  声明接收 params 参数 */}
        <Route path="/home/messages/details/:id/:title" component={Details} />
      </div>
    )
  }
}
