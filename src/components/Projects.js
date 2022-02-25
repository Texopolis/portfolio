import React, { useState } from 'react';
import { Link } from 'react-router-dom'


export default function Projects(){

    const mouseEnter=(e)=>{
        e.target.classList.add('glow')
    }

    const mouseLeave=(e)=>{
        e.target.classList.remove('glow')
    }
    return(
        <>
        <svg id='svgTop' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2302ff" fillOpacity="1" d="M0,192L48,192C96,192,192,192,288,208C384,224,480,256,576,266.7C672,277,768,267,864,240C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        <div className="projects">
            <div className="projectGrid">
                <Link to='web3VoteApp'
                    className={`projectItem web3VoteApp`}
                    id={'web3VoteApp'}
                    onMouseOver={mouseEnter}
                    onMouseLeave={mouseLeave}>
                    <label for={'web3VoteApp'} >web3 election dApp</label>
                </Link>
                <Link to='Web3'
                    className={`projectItem web3PassGen`}
                    id={'web3PassGen'}
                    onMouseOver={mouseEnter}
                    onMouseLeave={mouseLeave}>
                    <label for={'web3PassGen'} >web3 password generator</label>
                </Link>
                <Link to='Web2'
                    className={`projectItem web2PassGen`} 
                    id={'web2PassGen'}
                    onMouseOver={mouseEnter}
                    onMouseLeave={mouseLeave}>
                    <label for={'web2PassGen'}>web2 password generator</label>
                </Link>
                <Link to='troutCounter'
                    className="projectItem troutCounter"
                    id={'troutCounter'}
                    onMouseOver={mouseEnter}
                    onMouseLeave={mouseLeave}>
                    <label for={'troutCounter'}>trout Counter</label>
                </Link>
                <Link to='pacman'
                    className="projectItem pacman"
                    id={'pacman'}
                    onMouseOver={mouseEnter}
                    onMouseLeave={mouseLeave}>
                    <label for={'pacman'}>pacman clone</label>
                </Link>
                <Link to='apiDashboard'
                    className="projectItem apiDashboard"
                    id={'apiDashboard'}
                    onMouseOver={mouseEnter}
                    onMouseLeave={mouseLeave}>
                    <label for={'apiDashboard'}>API dashboard</label>
                </Link>
            </div>

        </div>

    </>
    )
}