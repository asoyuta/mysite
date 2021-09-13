import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import data from "./pages/data.json"
import "./stylesheet.scss"

ReactDOM.render(
  <React.StrictMode>
    <App lineInfoList={data.lineInfoList}/>
  </React.StrictMode>,
  document.getElementById('root')
);