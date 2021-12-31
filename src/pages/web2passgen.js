import React from 'react';
import GridContainer from '../components/GridContainer'
import ProjectTemplate from '../components/projectTemplate'


export default function Web2passgen(){
    return (
        <>
            <GridContainer cellColor='cellProject'/>
            <ProjectTemplate
                projectTemplateTitle='web2 Password Generator'
                projectTemplateDescription="description here"
                projectTemplateWorkingSiteLink='https://texopolis.github.io/passwordGenerator/'
                projectTemplateCodeLink='https://github.com/Texopolis/passwordGenerator'
                htmlIcon='htmlIcon icon'
                cssIcon='cssIcon icon'
                javaScriptIcon='javaScriptIcon icon '
            />
        </>
    )
}
