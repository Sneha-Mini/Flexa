import React from 'react'
import "../index.css"
import About from '../About'
import CenterHeading from '../CenterHeading'
import Contact from '../Contact'
import Exercise from '../Exercise'
import Feedback from '../Feedback'
import Footer from '../Footer'
import Home from '../Home'
import Navbar from '../Navbar'
import Services from '../Services'

function Main() {
  return (
    <div>
       <Navbar></Navbar>
     <Home></Home>
     <About></About>
     <div id="exercise" class="anchor-spacer1">
     <CenterHeading 
        heading="To Get Your Goal" 
        paragraph="Exercise"
        description="Customized workouts tailored to help you reach your fitness goals faster."
      />
      <Exercise></Exercise>
      </div>
      <Services></Services>
      <CenterHeading
        heading="What Our Customer Say" 
        paragraph="Testimonials"
        description="Discover what our customers have to say about their transformative fitness journey with us."
      />
      <Feedback></Feedback>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Main
