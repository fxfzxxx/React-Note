import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

//生成唯一的 id
console.log(nanoid());
export default class index extends Component {
   static propTypes = {
      addItem: PropTypes.func.isRequired
   }
   handleKeyUp = (event) => {
      const {keyCode,target} = event
      // console.log(keyCode);
      if (keyCode === 13 && target.value.trim() !== "") {
         let item = {ID:nanoid(), content: target.value, isFinished: false}
         this.props.addItem(item)
         target.value = ""
         // console.log(target.value);
      }
   }
  render() {
    return (
      <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称, 按回车键确认"/>
        </div>
    )
  }
}
