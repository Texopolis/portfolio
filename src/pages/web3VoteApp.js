import React from 'react';
import GridContainer from '../components/GridContainer'
import ProjectTemplate from '../components/projectTemplate'
import { Link } from 'react-router-dom'



export default function Web3PassGen(){
    
    const description=<p>lorem ipsum dolor sit amet, consectetur adip</p>
    
    
    return (
        <>
            <GridContainer cellColor='cellProject'/>
            <ProjectTemplate 
                projectTemplateTitle='web3 Voting dApp'
                projectTemplateRole='designer/developer'
                projectTemplateDescription={description}
                projectTemplateWorkingSiteLink='https://web3vote.netlify.app/'
                projectTemplateCodeLink='https://github.com/Texopolis/voteapp'
                htmlIcon='htmlIcon icon'
                htmlText='HTML'
                cssIcon='cssIcon icon'
                javaScriptIcon='javaScriptIcon icon '
                reactIcon='reactIcon icon'
                solidityIcon='solidityIcon icon'
                ProjectTemplateVideoText='video'
                projectTemplateVideoLink='/web3VoteAppVideo'
            />
        </>
    )


}