import React from 'react';
import GridContainer from '../components/GridContainer'
import ProjectTemplate from '../components/projectTemplate'


export default function Web2passgen(){
    return (
        <>
            <GridContainer cellColor='cellProject'/>
            <ProjectTemplate
                projectTemplateTitle='web2 Password Generator'
                projectTemplateRole='designer/developer'
                projectTemplateDescription='A fast and straightforward password generator that allows users to enter custom inputs for desired length and number of different characters. This project became the precursor to the Web3 password generator with the random logic I wrote being replaced by the Chainlink VRF.'
                projectNotes='This site uses the method .at() which is not currently supported on Safari or Internet Explorer.' 
                projectTemplateWorkingSiteLink='https://texopolis.github.io/passwordGenerator/'
                projectTemplateCodeLink='https://github.com/Texopolis/passwordGenerator'
                htmlIcon='htmlIcon icon'
                cssIcon='cssIcon icon'
                javaScriptIcon='javaScriptIcon icon '
            />
        </>
    )
}
