import logo from "./logo.svg"
import React, { component } from "react"
import "./App.css"
import Hello from "./components/Hello"
import Welcome from "./components/Welcome/Welcome"

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}

export default App

