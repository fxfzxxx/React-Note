//创建 rudux 中最为核心的 store 对象
import {createStore, applyMiddleware} from 'redux'
//引入 redux-thunk 用于支持异步 action
 import thunk from 'redux-thunk'
 //引入 redux 开发者工具
 import {composeWithDevTools} from 'redux-devtools-extension'

 import allReducer from './reducers'


//默认暴露一个 store

export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

