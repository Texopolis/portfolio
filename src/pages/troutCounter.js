import React from 'react';
import GridContainer from '../components/GridContainer'
import ProjectTemplate from '../components/projectTemplate'


export default function TroutCounter(){
const wackypuppyLink=<a id='wackyPuppLink' href='https://www.wackypuppy.com/'>Wackypuppy</a> 

/* <a href="https://github.com/">wackypuppy</a> */
// const goToWP=()=> {
//     window.open('https://www.wackypuppy.com/, "_blank"')
// }
// console.log(wackypuppyLink)

const text= <p>Using contacts from my previous career as a chef, I collaborated with {wackypuppyLink} as they were launcing a website for the trout that is produced by my former employer. I was tasked to create a component in JavaScript that updates in realtime the current number of wild fish that have been saved from becoming fish food by using an all vegetarian feed. The site is now live with my counter active in the 'Protecting Our Oceans' section.</p>


    return (
        <>
            <GridContainer cellColor='cellProject'/>
            <ProjectTemplate
            projectTemplateTitle='trout counter'
            projectTemplateRole='devloper'
            projectTemplateDescription= {text}
            projectTemplateWorkingSiteLink='https://mcfarlandsprings.com/'
            projectTemplateCodeLink='https://github.com/Texopolis/McFarland-Springs-counter-component'
            htmlIcon='htmlIcon icon'
            cssIcon='cssIcon icon'
            javaScriptIcon='javaScriptIcon icon '
            />
        </>
    )
}
