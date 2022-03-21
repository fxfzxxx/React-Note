import React, { Component } from 'react'
import qs from 'qs'
const DetialData = [
  {id:'01',content:'Hello, China'},
  {id:'02',content:'Hello, Shandong'},
  {id:'03',content:'Hello, Zibo'},
]

export default class Details extends Component {
  render() {
  
    const {id, title} = this.props.location.state
    const findRes = DetialData.find((item) => item.id === id)
    
    // console.log(result);
    //接收 params 参数
    return (
      <ul>
        <li>Id: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {findRes.content} </li>
      </ul>
    )
  }
}
