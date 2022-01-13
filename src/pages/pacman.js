import React from 'react';
import GridContainer from '../components/GridContainer'
import ProjectTemplate from '../components/projectTemplate'


export default function Pacman(){
    return (
        <>
            <GridContainer cellColor='cellProject'/>
            <ProjectTemplate
            projectTemplateTitle='pacman clone'
            projectTemplateRole='designer/developer'
            projectTemplateDescription="A clone of the 1980 action video game hit Pacman. This was one of the first video games I ever experienced- and this is my attempt to replicate it using JavaScript and CSS. "
            projectNotes='This site is not optimized for mobile'
            projectTemplateWorkingSiteLink='https://texopolis.github.io/pacman/'
            projectTemplateCodeLink='https://github.com/Texopolis/pacman'
            htmlIcon='htmlIcon icon'
            cssIcon='cssIcon icon'
            javaScriptIcon='javaScriptIcon icon '
            ProjectTemplateVideoText=''
            projectTemplateVideoLink='null'

            />
        </>
    )
}
