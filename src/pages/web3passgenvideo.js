import React from 'react';
import GridContainer from '../components/GridContainer'
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import Web3Video from '../video/web3PassGenDemo.mp4'
import Poster from '../images/web3thumb2.png'

export default function web3passgenVideo(){
    
    

    return(
        <>

            <GridContainer cellColor='cellProject' />

            <div className='videoPageContainer'>
                <h2 className="major">web3 password generator</h2>
                <div className='videoContainer'>
                    <video className=' video-js vjs-fill vjs-big-play-centered'
                    src={Web3Video}
                    type='video/mp4'
                    controls 
                    poster={Poster}
                    />
                </div>
                <h3 className='videoDescription'>Description of app in action:<br/> First the user is presented with a landing page if the browser detects a wallet extension like Metamask is installed and running.<br/>Then once the user initiates the "connection" to the Ethereum blockchain, Metamask pops up and confirms that the user wants to connect their wallet. This is the Web3 equivalent of 'logging in' to a site.<br/>Once connected, the user must initiate a randomness call from the blockchain. The gas fees associated with this call is presented to the user and if accepted, the call returns the random number to the app which is then converted into an 11 character password and the option to copy it to the clipboard is offered.</h3>
            </div>
        </>
    )

}