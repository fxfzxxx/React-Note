//引入 Count 的 UI 组件
import CountUI from "../../component/Count"
//引入actionCreate
import {createIncrementAction, createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action"

//引入 connect 用于连接 UI 组件和 redux
import { connect } from "react-redux"

//通过函数的返回值(键值对)给 UI 组件传 props, which is the state in redux
const mapStateToProps = (state) => {
  return { a: state }
}
//通过函数的返回一个函数(键值对), 作为操作 redux 中 state 的方法
const mapDispatchToProps = (dispatch) => {
  return {
    plus: number => dispatch(createIncrementAction(number)),
    minus: number => dispatch(createDecrementAction(number)),
    asyncPlus: (number,time) => dispatch(createIncrementAsyncAction(number,time))

  }
}
//创建并暴露一个容器组件, 连接 UI 组件并传递 props
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
