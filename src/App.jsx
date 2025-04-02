import React from 'react'
import {About,Footer,Header,Skills,Work} from './Container'
import { Navbar } from './Components'
import './App.scss'



const App = () => {
  return (
    <div className="app" id = "home">
        <Navbar/>
           <Header/>
           <About/>
           <Work/>
           <Footer/>
           <Skills/>
          

    </div>
  )
}

export default App