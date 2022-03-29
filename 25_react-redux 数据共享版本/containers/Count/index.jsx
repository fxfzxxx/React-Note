//引入actionCreate
import React, { Component } from "react"

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count"

//引入 connect 用于连接 UI 组件和 redux
import { connect } from "react-redux"

class Count extends Component {
   //加
   increment = () => {
     const { value } = this.selectNumber
     this.props.plus(Number(value))
   }
   //减
   decrement = () => {
     const { value } = this.selectNumber
     this.props.minus(Number(value))
   }
   //如果是奇数加
   incrementIfOdd = () => {
     const { value } = this.selectNumber
     if(this.props.a%2 === 1) {
       this.props.plus(Number(value))
     }
   }
   //异步加
   incrementAsync = () => {
     const { value } = this.selectNumber
     this.props.asyncPlus(Number(value),1000)
   }
   render() {
     console.log(this.props);
     return (
       <div>
          <h2> 我是 Count 组件, 下方总人数:{this.props.ren.length}</h2>
         <h3>当前求和为: {this.props.he} </h3>
         <select ref={(c) => (this.selectNumber = c)}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
         </select>
         &nbsp;
         <button onClick={this.increment}>+</button>&nbsp;
         <button onClick={this.decrement}>-</button>&nbsp;
         <button onClick={this.incrementIfOdd}>当前求和为奇数+</button>&nbsp;
         <button onClick={this.incrementAsync}>异步加</button>&nbsp;
       </div>
     )
   }
 }

//创建并暴露一个容器组件, 连接 UI 组件并传递 props
// dispatch 精简写法, 由 react-rudux 优化, 自动调用 dispatch
export default connect(
  (state) => ({ he:state.he, ren:state.ren }),
  {
     plus:createIncrementAction,
     minus:createDecrementAction,
     asyncPlus:createIncrementAsyncAction
  }

  //dispatch 一般写法
//   (dispatch) => ({
//     plus: (number) => dispatch(createIncrementAction(number)),
//     minus: (number) => dispatch(createDecrementAction(number)),
//     asyncPlus: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
//   })
)(Count)
