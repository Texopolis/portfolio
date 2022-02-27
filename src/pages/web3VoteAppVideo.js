import React from 'react';
import GridContainer from '../components/GridContainer'
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import Web3Video from '../video/web3votevideo.mp4'
import Poster from '../images/web3voteappthumb.png'

export default function web3VoteAppVideo(){
    
    

    return(
        <>

            <GridContainer cellColor='cellProject' />

            <div className='videoPageContainer'>
                <h2 className="major">web3 election dApp</h2>
                <div className='videoContainer'>
                    <video className=' video-js vjs-fill vjs-big-play-centered'
                    src={Web3Video}
                    type='video/mp4'
                    controls 
                    poster={Poster}
                    />
                </div>
                <h3 className='videoDescription'>Description of app in action:<br/>The browser first checks to see if Metamask is installed and if it is, it will display the candidates up for election. In this demo the total vote talley is also displayed but this is a development feature and would not be included in the final deployment. The user must then connect an account which is displayed and a green light indicator is rendered. The user can now record their vote- once a vote is made, Metamask will confirm that the gas price is accepted and then continue to write that vote to the blockchain. After 15-30 seconds the block will be written and the vote will be added to the vote talley.</h3>
            </div>
        </>
    )

}