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
            projectTemplateDescription="Chrome extension for personal use which calls on several different APIs to display curated, personalized information and graphics each time a new tab is opened in Chrome."
            // projectNotes='This site is not optimized for mobile'
            projectTemplateWorkingSiteLink='https://texopolis.github.io/apiDashboard/'
            projectTemplateCodeLink='https://github.com/Texopolis/apiDashboard'
            htmlIcon='htmlIcon icon'
            cssIcon='cssIcon icon'
            javaScriptIcon='javaScriptIcon icon '
            ProjectTemplateVideoText=''
            projectTemplateVideoLink='null'
            />
        </>
    )
}
