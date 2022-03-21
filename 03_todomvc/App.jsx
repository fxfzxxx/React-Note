import React, { Component } from "react"
import Header from "./component/Header"
import List from "./component/List"
import Footer from "./component/Footer"
import "./App.css"

export default class App extends Component {
  state = {
    defaultList: [
      { ID: 1, content: "Call David", isFinished: true, isEdit: false },
      { ID: 2, content: "Go to gym", isFinished: false, isEdit: false },
      { ID: 3, content: "Buy an apple", isFinished: false, isEdit: false },
    ],
    flag: false,
  }
  addItem = (item) => {
    const { defaultList } = this.state
    const newList = [item, ...defaultList]
    this.setState({ defaultList: newList })
  }
  checkBoxFinish = (ID, isFinished) => {
    const { defaultList } = this.state
    let j = 0
    for (let i = 0; i < defaultList.length; i++) {
      if (defaultList[i].ID === ID) {
        defaultList[i].isFinished = isFinished
      }
      if (defaultList[i].isFinished) {
         j++
         console.log(j)
      }
      if (j === defaultList.length) {this.setState({ flag: true }) } else {
         this.setState({ flag: false })
      }
      // if(j===0) this.setState({ flag: false })
    }
    this.setState({ defaultList })
  }
  deleteItem = (ID) => {
    let { defaultList } = this.state
    defaultList = defaultList.filter((item) => item.ID !== ID)
    if(defaultList.length === 0) this.setState({ flag:false }) 
    this.setState({ defaultList })
  }
  selectAll = () => {
    let { defaultList, flag } = this.state
    //  let flag = false;
    if (flag === false) {
      for (let i = 0; i < defaultList.length; i++) {
        defaultList[i].isFinished = true
      }
      flag = true
    } else if (flag === true ) {
      for (let i = 0; i < defaultList.length; i++) {
        defaultList[i].isFinished = false
      }
      flag = false
    }
    console.log(flag)
    this.setState({ defaultList, flag })
  }
  deleteAll = () => {
   let { defaultList } = this.state
   defaultList = defaultList.filter(item => item.isFinished === false)
   if (defaultList.length === 0) this.setState({flag: false})
   this.setState({ defaultList })
  }
  render() {
    const { defaultList } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addItem={this.addItem} />
          <List
            defaultList={defaultList}
            checkBoxFinish={this.checkBoxFinish}
            deleteItem={this.deleteItem}
          />
          <Footer {...this.state} deleteAll = {this.deleteAll}selectAll={this.selectAll} />
        </div>
      </div>
    )
  }
}
