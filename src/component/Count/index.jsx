import React, { Component } from "react"
import { Button } from "antd"
import store from "../../redux/store"
import "antd/dist/antd.css"

export default class Count extends Component {
   // state ={count:0}
   //检测 redux 中状态的变化,还要变化,就调用 render
   componentDidMount() {
      store.subscribe(()=>{
         this.setState({})
      })
   }
   //加
  increment = () => {
   const {value} = this.selectNumber
   store.dispatch({type:'increment',data:Number(value)})
  }
  //减
  decrement = () => {
   const {value} = this.selectNumber
   store.dispatch({type:'decrement',data:Number(value)})
  }
  //如果是奇数加
  incrementIfOdd = () => {
   const {value} = this.selectNumber
   //因为初始值就是设置的是 0 而非一个对象, 所以不用解构赋值
   const count = store.getState()
   if(count%2 !== 0) {
      store.dispatch({type:'increment',data:Number(value)})
   }
  }
  //异步加
  incrementAsync = () => {
   const {value} = this.selectNumber
   setTimeout(()=>{
      store.dispatch({type:'increment',data:Number(value)})
   },1000)
  }
  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState()} </h1>
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
