import React, { Component } from "react"
import PropTypes from "prop-types"
import "./index.css"
import Item from "../Item/index"

export default class index extends Component {
   static propTypes = {
      defaultList: PropTypes.array.isRequired,
      checkBoxFinish: PropTypes.func.isRequired
   }
  render() {
    const { defaultList,checkBoxFinish,deleteItem } = this.props
    return (
      <ul className="todo-main">
         {/* 这里返回一个数组, 元素是 li, 看来数组可以直接分个渲染在 html 里 */}
        {defaultList.map((item) => {return <Item {...this.props} key={item.ID} {...item}/>})}
      </ul>
    )
  }
}
