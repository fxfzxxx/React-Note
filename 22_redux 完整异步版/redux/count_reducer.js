// 该文件是是用于创建一个为 Count 组件服务的reducer 本质就是一个函数
// reducer 函数接收两个参数, 分别为: 之前的状态(preState), 动作对象(action)

import { INCREMENT,DECREMENT } from "./constant"

//初始化状态
const initState = 0
export default function countReducer(preState=initState, action) {
  //从 action 对象中获取:type, data
  const { type, data } = action
  //根据 type 决定如何加工数据
  switch (type) {
    case INCREMENT :
      return preState + data
    case DECREMENT :
      return preState - data
    default:
      return preState
  }
}
