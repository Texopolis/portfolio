import React, { useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import { CSSTransitionGroup } from 'react-transition-group'

export default function NavBar(){

    const [showMenuBtn, setMenuBtn]=useState(true)
    const [showNavBar, setNavBar] = useState(false)


    return(
        <nav className="navBar">
            {showMenuBtn} && (
               <div id='menuIcon' onClick={()=>setNavBar(true)}></div>
            )
            <div className='navList'>
                    <a href='#about' className='navLink aboutLink'>ABOUT</a>
                    <a className='navLink projectsLink' href="#">resume</a>
                    <a href='#contact' className='navLink contactLink' >CONTACT</a>
            </div>
        </nav>
    )
}