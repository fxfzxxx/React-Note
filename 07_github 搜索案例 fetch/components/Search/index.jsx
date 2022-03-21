import PropTypes from "prop-types"
import React, { Component } from "react"
import PubSub from "pubsub-js"
import axios from "axios"

export default class Search extends Component {
  static propTypes = {}
  state = {}
  keyWordInput = React.createRef()
  search = () => {

  //发布
  PubSub.publish('updateState',("",this.state))


    //连续解构赋值 + 重命名
    const {
      keyWordInput: {
        current: { value: value2 },
      },
    } = this
    console.log(value2)
    //通知List 更新状态
    // this.props.updateAppState({ isFirst: false, isLoading: true })
    //注意要给自己发
    axios.get(`http://localhost:3000/api1/search/users?q=${value2}`).then(
      (response) => {
        console.log("成功了", response.data.items)
        //通知 List 更新状态
        // this.props.updateAppState({
        //   isLoading: false,
        //   dataArray: response.data.items,
        // })
      },
      (error) => {
        console.log("失败了", error)
        //要写 message, 过后渲染错误信息, 对象不能直接在标签内显示, 或者后面加 message 都可以
        // this.props.updateAppState({ isLoading: false, err: error.message })
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={this.keyWordInput}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
