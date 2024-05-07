import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { initApp } from './init'
import { Provider } from 'react-redux'
import { alarmsStore } from './state'

initApp()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={alarmsStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
