import React from 'react'
import NavBar from './NavBar'
import HomePage from './HomePage'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default function MainContainer(){
   return( 
        <div className="mainContainer">
            <NavBar />
            <HomePage />
            <About />
            <Projects />
            <Contact />

        </div>
   )
}