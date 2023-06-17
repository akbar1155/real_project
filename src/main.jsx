import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/header/header'
import { Intro } from './components/intro/intro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Intro />
  </React.StrictMode>,
)
