import React from 'react';
import GridContainer from '../components/GridContainer'
import ProjectTemplate from '../components/projectTemplate'
import { Link } from 'react-router-dom'



export default function Web3PassGen(){
    
    const description=<p>This project was developed using React and Solidity- additional tools used were Truffle, Ganache, ethers.js and Metamask. The election voting dApp will accept a single vote from an authorized address and return an immutable vote talley. The vote talley cannot be altered and unauthorized accounts cannot record a vote.<br></br>In developing this dApp I first wrote a smart contract in Solidity, deployed it to the Kovan testnet, then developed a frontend for the end-user to interact with. The contract does contain code that disallows authorized users to submit more than one vote, but that logic has been commented in development.</p>
    
    
    return (
        <>
            <GridContainer cellColor='cellProject'/>
            <ProjectTemplate 
                projectTemplateTitle='web3 election dApp'
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