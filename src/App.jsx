import React from 'react'
import {About,Footer,Header,Skills,Testimonial,Work} from './Container'

const App = () => {
  return (
    <div className="app">
      <Header/>
      <About/>
      <Footer/>
      <Skills/>
      <Testimonial/>
      <Work/>

    </div>
  )
}

export default App