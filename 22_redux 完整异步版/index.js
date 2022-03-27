import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./redux/store"

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
)
// diffing算法支持的, 如果 redux 有任何改变就重新渲染改变的地方
store.subscribe(()=>{
  ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
  )
})


