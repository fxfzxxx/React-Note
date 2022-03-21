//专门用来为 Count 组件生成 action 对象

//小括号包裹用来省略 return 返回一个对象. 如果不包裹就会把花括号内当成函数
const createIncrementAction = (data) => ({type:'increment',data})
const createIncrementAction = (data) => ({type:'decrement',data})
