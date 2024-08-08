import React from 'react'
import Header from './comonents/header/Header'
import { Bottom } from './comonents/bottom/Bottom'

const App = () => {
  return (
    <div className=" dark:text-white dark:bg-black min-h-screen w-screen">
      <Header/>
      <Bottom/>
    </div>
  )
}

export default App