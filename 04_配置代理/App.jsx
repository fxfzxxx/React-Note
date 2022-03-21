import React, { Component } from "react"
import axios from "axios"

export default class App extends Component {
   get = () => {
      
      axios.get('http://localhost:3000/api1/students').then(
         response => {console.log('成功',response.data);},
         error => {console.log('失败',error);}
      )
   }
  
  render() {
    return (
      <div className="test">
         <button onClick={this.get}> 点我获取学生数据</button>
      </div>
    )
  }
}
