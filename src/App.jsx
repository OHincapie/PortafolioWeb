import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { BannerApp } from './components/BannerApp'
import { AboutApp } from './components/AboutApp'

function App() {

  return (

    <>
      <Header></Header>
      <BannerApp></BannerApp>
      <AboutApp></AboutApp>
    </>
  )
}

export default App
