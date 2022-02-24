import React from 'react';
import GridContainer from '../components/GridContainer'
import ProjectTemplate from '../components/projectTemplate'
import { Link } from 'react-router-dom'



export default function Web3PassGen(){
    
    const description=<p>Recently the security of elections in the United States has been called into question. In order to reinstate confidence in the process, I developed a blockchain voting dApp which accepts a single vote from an authorized address and returns an immutable voting talley. The vote talley cannot be altered and unauthorized accounts cannot record a vote.<br></br>In developing this dApp I first wrote a smart contract in Solidity, deployed it to the Kovan testnet, then developed a frontend for the end-user to interact with. The contract does contain code that disallows authorized users to submit more than one vote, but that logic has been commented out for demonstration purposes.</p>
    
    
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