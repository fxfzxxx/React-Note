import React, { Component } from "react"
import { creatAddPersonAction } from "../../redux/actions/person"
import { connect } from "react-redux"
import { nanoid } from "nanoid"

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = { id: nanoid(), name, age }
    console.log(personObj)
    this.props.creatAddPersonAction(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
    // console.log(this.props.personArray);
  }
  render() {
    return (
      <div>
        <h2>我是 Person组件, 上方求和为: {this.props.he}</h2>
        <input
          ref={(c) => (this.nameNode = c)}
          typ="text"
          placeholder="输入名字"
        />
        &nbsp;
        <input
          ref={(c) => (this.ageNode = c)}
          typ="text"
          placeholder="输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.ren.map((e) => {
            return <li key={e.id}>姓名:{e.name}  年龄: {e.age}  </li>
          })}
        </ul>
      </div>
    )
  }
}
export default connect((state) => ({ ren:state.ren,he:state.he }), { creatAddPersonAction })(Person)
