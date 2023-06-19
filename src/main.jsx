import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/footer/Footer'
import { Header } from './components/header/header'
import { Intro } from './components/intro/intro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Footer/>
  </React.StrictMode>,
)
