import PropTypes from "prop-types"
import React, { Component } from "react"
import Item from "../Item"

export default class List extends Component {
  static propTypes = {}
  displayItem = () => {
    return this.props.dataArray.map((e) => {
      return <Item key={e.node_id} {...e}/>
    })
  }
  render() {
    const {dataArray, isFirst, isLoading,err} = this.props
    return (
      <div className="row">
        {
          //连续三元表达式
          isFirst ? <h2>欢迎使用, 输入关键字, 随后点击搜索.</h2> 
          : isLoading ? <h2>Loading ...</h2>
          : err ? <h2>{err}</h2> 
          : this.displayItem()
          /* {this.props.dataArray.map((e) => {
        return <Item />
      })} */
        }
        
      </div>
    )
  }
}
