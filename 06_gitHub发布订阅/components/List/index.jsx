import PropTypes from "prop-types"
import React, { Component } from "react"
import PubSub from 'pubsub-js'
import Item from "../Item"

export default class List extends Component {
  state = {
    dataArray:[], //数据数组
    isFirst:true, //第一次欢迎词
    isLoading:false, //加载提示词
    err:''
  }


  //订阅
  componentDidMount() {
    const updateState = PubSub.subscribe('updateState',(_,state=this.state) => {
      this.setState({state})
    })
    // console.log(updateState);
  }


  // displayItem = () => {
  //   return this.props.dataArray.map((e) => {
  //     return <Item key={e.node_id} {...e}/>
  //   })
  // }
  render() {
    console.log("状态更新了");
    const {dataArray, isFirst, isLoading,err} = this.props
    return (
      <div className="row">
        {/* {
          //连续三元表达式
          isFirst ? <h2>欢迎使用, 输入关键字, 随后点击搜索.</h2> 
          : isLoading ? <h2>Loading ...</h2>
          : err ? <h2>{err}</h2> 
          : this.displayItem()
        }
         */}
      </div>
    )
  }
}
