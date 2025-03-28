import React from 'react'
import {About,Footer,Header,Skills,Testimonial,Work} from './Container'
import { Navbar } from './Components'
import './App.scss'



const App = () => {
  return (
    <div className="app">

   { /*  
     <Navbar/>
      <Header/>
      */}


      <About/>
      <Footer/>
      <Skills/>
      <Testimonial/>
      <Work/>

    </div>
  )
}

export default App