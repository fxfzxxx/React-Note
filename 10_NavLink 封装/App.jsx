import React, { Component } from "react"
//路由组件
import About from "./pages/About"
import Home from "./pages/Home"
//一般组件
import Header from "./components/Header"
import MyNavLink from "./components/MyNavLink"
// 需要引入对应的路由版本, 是哈希路由, 还是浏览器路由
import { Route } from "react-router-dom"

import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生 js 靠 a 标签路由 */}
              {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}
              {/* 编写路由链接 */}
              <MyNavLink to="/about" title="About">
                {" "}
                About
              </MyNavLink>
              <MyNavLink to="/home" title="Home">
                Home
              </MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
