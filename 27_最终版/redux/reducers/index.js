// 该文件用于汇总所有的 reducer

import {combineReducers} from 'redux';
//不加花括号是因为默认暴露了
import countReducer from './count'
import personReducer from './person'

//汇总所有 reducer, 并默认暴露
export default combineReducers({
   count:countReducer,
   person:personReducer
})