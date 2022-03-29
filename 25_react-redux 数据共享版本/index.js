import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./redux/store"
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
// 注释掉 subsicribe 依然可以检测 redux 的变化, 并且重新渲染页面, 
// 是因为 react-redux 的 connect 函数会让容器自带检测的能力
// // diffing算法支持的, 如果 redux 有任何改变就重新渲染改变的地方
// store.subscribe(()=>{
//   ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById("root")
//   )
// })


