//创建 rudux 中最为核心的 store 对象
import {createStore} from 'redux'
//不加花括号是因为默认暴露了
import countReducer from './count_reducer'
//默认暴露一个 store
export default createStore(countReducer)

