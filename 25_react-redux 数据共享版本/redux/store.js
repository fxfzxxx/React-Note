//创建 rudux 中最为核心的 store 对象
import {createStore, applyMiddleware, combineReducers} from 'redux'
//不加花括号是因为默认暴露了
import countReducer from './reducers/count'
import personReducer from './reducers/person'
//引入 redux-thunk 用于支持异步 action
 import thunk from 'redux-thunk'

//汇总所有 reducer
const allReducer = combineReducers({
   he:countReducer,
   ren:personReducer
})
//默认暴露一个 store

export default createStore(allReducer,applyMiddleware(thunk))

