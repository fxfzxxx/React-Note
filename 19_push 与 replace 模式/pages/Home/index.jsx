import React, { Component } from "react"
import News from "./News"
import Messages from "./Messages"
import MyNavLink from "../../components/MyNavLink"
import { Route, Switch , Redirect} from "react-router-dom"
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news"> News </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/messages"> Messages </MyNavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/home/messages" component={Messages} />
          <Route path="/home/news" component={News} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    )
  }
}
