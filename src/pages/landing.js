import React from 'react';
import GridContainer from '../components/GridContainer'
import MainContainer from '../components/MainContainer'
import HomePage from '../components/HomePage'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


export default function Landing(){
    return(
        <>
            <GridContainer cellColor='cell'/>
            <HomePage />
            <Projects />
            <About />

            <Contact />
        </>
    )
}