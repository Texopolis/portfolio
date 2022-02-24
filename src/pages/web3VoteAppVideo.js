import React from 'react';
import GridContainer from '../components/GridContainer'
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import Web3Video from '../video/web3PassGenDemo.mp4'
import Poster from '../images/web3voteappthumb.png'

export default function web3VoteAppVideo(){
    
    

    return(
        <>

            <GridContainer cellColor='cellProject' />

            <div className='videoPageContainer'>
                <h2 className="major">web3 Voting dApp</h2>
                <div className='videoContainer'>
                    <video className=' video-js vjs-fill vjs-big-play-centered'
                    src={Web3Video}
                    type='video/mp4'
                    controls 
                    poster={Poster}
                    />
                </div>
                <h3 className='videoDescription'>Description of app in action:<br/>lorem ipsum dolor sit amet, consectetur</h3>
            </div>
        </>
    )

}