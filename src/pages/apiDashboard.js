import React from 'react';
import GridContainer from '../components/GridContainer'
import ProjectTemplate from '../components/projectTemplate'


export default function Pacman(){
    return (
        <>
            <GridContainer cellColor='cellProject'/>
            <ProjectTemplate
            projectTemplateTitle='api dashboard'
            projectTemplateRole='designer/developer'
            projectTemplateDescription="Chrome extension for personal use which calls on several different APIs to display curated, personalized information and graphics each time I open a new tab in Chrome. By controlling the information displayed, I am not distracted by unnecessary material or subjected to ads. "
            // projectNotes='This site is not optimized for mobile'
            projectTemplateWorkingSiteLink='https://texopolis.github.io/apiDashboard/'
            projectTemplateCodeLink='https://github.com/Texopolis/apiDashboard'
            htmlIcon='htmlIcon icon'
            cssIcon='cssIcon icon'
            javaScriptIcon='javaScriptIcon icon '
            />
        </>
    )
}
