import React from 'react'
import Header from './comonents/header/Header'
import { Bottom } from './comonents/bottom/Bottom'
import Hero from './comonents/hero/Hero'
import Shop from './comonents/shop/Shop'
import Json from './comonents/json/Json'

const App = () => {
  return (
    <div className=" dark:text-white dark:bg-black min-h-screen w-screen">
      <Header/>
      <Bottom/>
      <Hero/>
      <Shop/>
      <Json/>
    </div>
  )
  
}

export default App