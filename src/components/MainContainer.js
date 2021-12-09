import React from 'react'
import NavBar from './NavBar'
import About from './About'

export default function MainContainer(){
   return( 
        <div className="mainContainer">
            <NavBar />
            <About />
        </div>
   )
}