import React, { Component } from "react"

export default class Count extends Component {
  //加, 通过action 函数创建 action
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
        <h1>当前求和为: {this.props.a} </h1>
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
