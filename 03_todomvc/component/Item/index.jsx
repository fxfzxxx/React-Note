import React, { Component } from "react"
import './index.css'

export default class index extends Component {
   state = {mouse: false}
   handleMouse = (flag) => {
      return ()=>{
          this.setState({mouse:flag})
      }
   }
   handleCheck = (ID) => {
      return (event)=>{
         this.props.checkBoxFinish(ID,event.target.checked)
      }
   }
   handleDeleteClick = (ID) => {
         return() => this.props.deleteItem(ID)
   }
  render() {
     const {ID, content, isFinished} = this.props;
     const {mouse} = this.state;
    return (
      <li style={{backgroundColor:mouse ?"#ddd" : "white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
           {/* 注意 defaultChecked  */}
          <input type="checkbox" checked = {isFinished} onChange={this.handleCheck(ID)}/>
          <span>{content}</span>
        </label>
        <button onClick = {this.handleDeleteClick(ID)} className="btn btn-danger" style={{ display: mouse ? "block" : "none" }}>
          删除
        </button>
      </li>
    )
  }
}
