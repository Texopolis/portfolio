import React from 'react';
import GridContainer from '../components/GridContainer'
import ProjectTemplate from '../components/projectTemplate'


export default function Pacman(){
    return (
        <>
            <GridContainer cellColor='cellProject'/>
            <ProjectTemplate
            projectTemplateTitle='pacman clone'
            projectTemplateDescription="description"
            projectTemplateWorkingSiteLink='https://texopolis.github.io/pacman/'
            projectTemplateCodeLink='https://github.com/Texopolis/pacman'
            htmlIcon='htmlIcon icon'
            cssIcon='cssIcon icon'
            javaScriptIcon='javaScriptIcon icon '
            />
        </>
    )
}
