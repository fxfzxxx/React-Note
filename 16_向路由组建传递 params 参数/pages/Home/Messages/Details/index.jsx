import React, { Component } from 'react'
const DetialData = [
  {id:'01',content:'Hello, China'},
  {id:'02',content:'Hello, Shandong'},
  {id:'03',content:'Hello, Zibo'},
]

export default class Details extends Component {
  render() {
    //接收 params 参数
    const {id, title} = this.props.match.params
    const findRes = DetialData.find((item) => { 
      return item.id === id
    })
    return (
      <ul>
        <li>Id: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {findRes.content}</li>
      </ul>
    )
  }
}
