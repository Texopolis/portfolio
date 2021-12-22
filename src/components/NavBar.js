import React from 'react'

export default function NavBar(){

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     const gridContainer = document.getElementById('gridContainer')
    //     gridContainer.classList.toggle('gridContainerMove')
    //     console.log('clicked')
    // }

    return(
        <nav className="navBar">
            <div className='navList'>
                <a className='navLink aboutLink' href="#">ABOUT</a>
                <a className='navLink projectsLink' href="#">PROJECTS</a>
                <a className='navLink contactLink' href="#">CONTACT</a>
            </div>
        </nav>
    )
}