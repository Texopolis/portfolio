import React from 'react'

export default function NavBar(){

    const handleClick = (e) => {
        e.preventDefault();
        const gridContainer = document.getElementById('gridContainer')
        gridContainer.classList.toggle('gridContainerMove')
        console.log('clicked')
    }

    return(
        <nav className="navBar">
            <div className='navList'>
                <a onClick={handleClick} className='navLink about' href="#">ABOUT</a>
                <a className='navLink projects' href="#">PROJECTS</a>
                <a className='navLink contact' href="#">CONTACT</a>
            </div>
        </nav>
    )
}