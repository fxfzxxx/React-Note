//引入actionCreate
import React, { Component } from "react"

import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count"

//引入 connect 用于连接 UI 组件和 redux
import { connect } from "react-redux"

class Count extends Component {
   //加
   increment = () => {
     const { value } = this.selectNumber
     this.props.increment(Number(value))
   }
   //减
   decrement = () => {
     const { value } = this.selectNumber
     this.props.decrement(Number(value))
   }
   //如果是奇数加
   incrementIfOdd = () => {
     const { value } = this.selectNumber
     if(this.props.a%2 === 1) {
       this.props.increment(Number(value))
     }
   }
   //异步加
   incrementAsync = () => {
     const { value } = this.selectNumber
     this.props.incrementAsync(Number(value),1000)
   }
   render() {
     console.log(this.props);
     return (
       <div className="Count">
          <h2> I'm Count Component. </h2>
         <h2>  The total number of person below is: {this.props.person.length}</h2>
         <h3>The current sum is: {this.props.count} </h3>
         <select ref={(c) => (this.selectNumber = c)}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
         </select>
         &nbsp;
         <button onClick={this.increment}>+</button>&nbsp;
         <button onClick={this.decrement}>-</button>&nbsp;
         <button onClick={this.incrementIfOdd}>Add if sum is odd</button>&nbsp;
         <button onClick={this.incrementAsync}>Asyc add</button>&nbsp;
       </div>
     )
   }
 }

//创建并暴露一个容器组件, 连接 UI 组件并传递 props
// dispatch 精简写法, 由 react-rudux 优化, 自动调用 dispatch
// 这个 connect 其实就是把容器的东西都传给 UI
export default connect(
  (state) => ({ count:state.count, person:state.person }),
  {
     increment,
     decrement,
     incrementAsync,
  }

  //dispatch 一般写法
//   (dispatch) => ({
//     plus: (number) => dispatch(createIncrementAction(number)),
//     minus: (number) => dispatch(createDecrementAction(number)),
//     asyncPlus: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
//   })
)(Count)
