import React from 'react';
import GridContainer from '../components/GridContainer'
import ProjectTemplate from '../components/projectTemplate'


export default function Web3PassGen(){
    return (
        <>
            <GridContainer cellColor='cellProject'/>
            <ProjectTemplate 
                projectTemplateTitle='web3 Password Generator'
                projectTemplateRole='designer/devloper'
                projectTemplateDescription="This app was created using React and was submitted to the Fall 2021 Chainlink Hackathon. On the surface, it's a simple random password generator but it's randomness is derived from the Chainlink VRF. It is called by a smart contract written in Solidity and deployed on the Kovan testnet. By using the Chainlink VRF the randomness of the password can be verified by a blockchain transaction. This verifiable randomness has tremendous application use cases in game logic and anywhere users are affected from a random event. The project provided 4 main challenges: 1. create a responsive app with React 2.write and deploy a smart contract with Solidity 3. use Ethers.io and Metamask to communicate between the Ethereum blockchain and the app 4. call the Chainlink VRF and return the result to the app. I was successful in meeting all my initial goals. Additional instructions and links to Kovan test ether in Github readme"
                projectTemplateWorkingSiteLink='https://web3passgenerator.netlify.app/'
                projectTemplateCodeLink='https://github.com/Texopolis/passgen'
                htmlIcon='htmlIcon icon'
                cssIcon='cssIcon icon'
                javaScriptIcon='javaScriptIcon icon '
                reactIcon='reactIcon icon'
                solidityIcon='solidityIcon icon'
            />
            {/* <h2 className='major'>web3PassGen</h2> */}
        </>
    )


}