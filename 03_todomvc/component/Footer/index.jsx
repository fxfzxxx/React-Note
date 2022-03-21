import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
   totalNum = () => {
      const {defaultList} = this.props;
      return defaultList.length
   }
   completeNum = () => {
      const {defaultList} = this.props;
      let num = 0;
      defaultList.forEach(e => {
         if(e.isFinished) num++
      });
      return num;
   }
   //接收 app.jsx 传的全选事件
   selectAll = this.props.selectAll;

  render() {
   const {defaultList,deleteAll,flag} = this.props;
   const totalNum = this.totalNum();
   const completeNum = this.completeNum();
   
    return (
      <div className="todo-footer">
          <label>
            <input onChange={this.selectAll} checked={flag} type="checkbox"/>
          </label>
          <span>
            <span>已完成 {completeNum}</span> / 全部 {totalNum}
          </span>
          <button onClick={deleteAll} className="btn btn-danger">清除已完成任务</button>
        </div>
    )
  }
}
