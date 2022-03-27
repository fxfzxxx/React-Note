//专门用来为 Count 组件生成 action 对象

import { INCREMENT,DECREMENT } from "./constant"

//小括号包裹用来省略 return 返回一个对象. 如果不包裹就会把花括号内当成函数
export const createIncrementAction = (data) => ({type:INCREMENT,data})
export const createDecrementAction = (data) => ({type:DECREMENT,data})
// 返回一个函数, 所以是异步 action,写法一, 测试不行, 需要写法二中传 dispatch
// export const createIncrementAsyncAction = (data,time) => {
//    return () => {
//       setTimeout(() => {
//          createIncrementAction(data)
//       },time)

//    }
// }
// 写法二, 二为视频里的写法, 我自己测试了第一种仍能正常运行 sss 视频里为 dispatch
export const createIncrementAsyncAction = (data,time) => {
   return (sss) => {
      setTimeout(() => {
         sss(createIncrementAction(data))
      },time)

   }
}