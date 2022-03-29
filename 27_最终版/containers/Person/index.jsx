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
    this.nameNode.value = ""
    this.ageNode.value = ""
    // console.log(this.props.personArray);
  }
  render() {
    return (
      <div className="person">
        <hr />
        <h2>I'm Person Component. The sum above is: {this.props.count}</h2>
        <input
          ref={(c) => (this.nameNode = c)}
          typ="text"
          placeholder="Please input name"
        />
        &nbsp;
        <input
          ref={(c) => (this.ageNode = c)}
          typ="text"
          placeholder="Please input age"
        />
        &nbsp;
        <button onClick={this.addPerson}>Add</button>
        <br />
        <br />
        <table cellspacing="10">
          <tr >
            <th width="60">Name</th>
            <th>Age</th>
          </tr>
          {this.props.person.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.age}</td>
              </tr>
            )
            // <li key={e.id}>Name:{e.name}  Age: {e.age}  </li>
          })}
        </table>
      </div>
    )
  }
}
export default connect(
  (state) => ({ person: state.person, count: state.count }),
  { creatAddPersonAction }
)(Person)
