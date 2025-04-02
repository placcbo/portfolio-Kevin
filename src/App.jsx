import React from 'react'
import {About,Footer,Header,Skills,Testimonial,Work} from './Container'
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
      <Testimonial/>
 

    </div>
  )
}

export default App