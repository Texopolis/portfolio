import React, { useState } from 'react';
import { Link } from 'react-router-dom'


export default function Projects(){
    const [isShown, setIsShown] = useState(false);
    const [glow, setGlow] = useState()

    // const onClickEvent=()=>{
    //     console.log('clicked')
    // }

    const mouseEnter=()=>{
        setIsShown(true)
        setGlow('glow')
        console.log('hovered')
    }

    const mouseLeave=()=>{
        setIsShown(false)
        setGlow('')
        console.log('not hovered')
    }

    

    return(
        <>
           <svg id='svgTop' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D16BA5" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,208C384,224,480,256,576,266.7C672,277,768,267,864,240C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        <div className="projects">
            <div className="projectGrid">
                <Link to='Web3'
                    // className="projectItem web3PassGen" 
                    className={`projectItem web3PassGen ${glow}`}
                    onMouseOver={mouseEnter}
                    onMouseLeave={mouseLeave}>
                        <div>{isShown && <h2 className='projectTitle'>web3 password generator</h2>}</div>
                </Link>            
                <Link to='Web2'
                    className="projectItem web2PassGen">
                </Link>
                <Link to='pacman'
                    className="projectItem pacman">
                </Link>
                <Link to='troutCounter'
                    className="projectItem troutCounter">
                </Link>
                <div className="projectItem hackathonContributions"></div>
            </div>
        </div>
        <svg id='svgBottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5FFBF1" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,133.3C672,107,768,53,864,74.7C960,96,1056,192,1152,202.7C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </>
    )
}