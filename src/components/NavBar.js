import React, { useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import { CSSTransitionGroup } from 'react-transition-group'

export default function NavBar(){

    const [showMenuBtn, setMenuBtn]=useState(true)
    const [showNavBar, setNavBar] = useState(false)
    const [menuBtnClass, setMenuBtnClass] =useState(true)

    const btnClicked=()=>{
        setNavBar(prevshowNavBar => !prevshowNavBar)
        setMenuBtnClass(prevmenuBtnClass => !prevmenuBtnClass)
    }

    const mouseEnter=(e)=>{
        e.target.classList.add('navLinkHighlight')
        
    }

    const mouseLeave=(e)=>{
        e.target.classList.remove('navLinkHighlight')
    }

    return(
        <nav className="navBar">
            {/* {showMenuBtn && (
                <div className={menuBtnClass?'menuIconClosed':'menuIconOpen'} onClick={btnClicked}>
                </div>)}
            {showNavBar && (
                    <div className='navList'>
                            <a href='#about'
                               className='navLink aboutLink'
                               onMouseOver={mouseEnter}
                               onMouseLeave={mouseLeave}>
                                   ABOUT</a>
                            <a href='#contact'
                                className='navLink contactLink'
                                onMouseOver={mouseEnter}
                                onMouseLeave={mouseLeave} >
                                    CONTACT</a>
                    </div>)}
            
            
             */}
        </nav>
    )

    // return(
    //     <nav className="navBar">
    //         {showMenuBtn && (
    //         <div id='menuIcon' onClick={btnClicked}>
    //         </div>)}
    //         <CSSTransitionGroup
    //             transitionName="navList"
    //             transitionAppear={true}
    //             transitionAppearTimeout={1500}
    //             transitionEnterTimeout={1500}
    //             transitionLeaveTimeout={300}
    //         >
    //                 {showNavBar && (
    //                 <div key='1' className='navList'>
    //                         <a key='2' href='#about' className='navLink aboutLink'>ABOUT</a>
    //                         <a key='3' href='#contact' className='navLink contactLink' >CONTACT</a>
    //                 </div>)}
    //         </CSSTransitionGroup>
            
            
    //     </nav>
    // )
}