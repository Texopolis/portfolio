import React from 'react';
import GridContainer from '../components/GridContainer'
import ProjectTemplate from '../components/projectTemplate'


export default function TroutCounter(){
    return (
        <>
            <GridContainer cellColor='cellProject'/>
            <ProjectTemplate
            projectTemplateTitle='trout counter'
            projectTemplateDescription="desciption"
            projectTemplateWorkingSiteLink='https://mcfarlandsprings.com/'
            projectTemplateCodeLink='https://github.com/Texopolis/McFarland-Springs-counter-component'
            htmlIcon='htmlIcon icon'
            cssIcon='cssIcon icon'
            javaScriptIcon='javaScriptIcon icon '
            />
        </>
    )
}
