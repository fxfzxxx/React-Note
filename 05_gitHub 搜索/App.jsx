import React, { Component } from "react"
import axios from "axios"
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {
  state = {
    dataArray:[],
    isFirst:true,
    isLoading:false,
    err:''
  }
  get = () => {
    axios.get("http://localhost:3000/api1/students").then(
      (response) => {
        console.log("成功", response.data)
      },
      (error) => {
        console.log("失败", error)
      }
    )
  }
  updateAppState = (appState) => {
    this.setState(appState);
    
  }

  render() {
    const {dataArray} = this.state
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
