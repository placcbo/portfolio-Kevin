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
           <Skills/>
           <Footer/> 
          

    </div>
  )
}

export default App