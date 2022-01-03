import React, { useState } from 'react';
import Email from '../images/email.png';
import Phone from '../images/phone.png';
import Github from '../images/github.png';
import LinkedIn from '../images/linkedin.png';

export default function Contact(){

    const [emailText, setEmail] = useState('EMAIL')

    const mouseEnterEmail=(e)=>{
        e.target.classList.add('contactHighlight')
        setEmail('0douglasbernstein@gmail.com')
    }

    const mouseLeave=(e)=>{
        e.target.classList.remove('contactHighlight')
        setEmail('EMAIL')
    }

    const mouseEnter=(e)=>{
        e.target.classList.add('contactHighlight')
    }

    return(
        <div className="contact" id='contact'>
            <h2 className='contactTitle'>contact</h2>
            <div className='contactGroup'>
                <a href="mailto:0douglasbernstein@gmail.com"
                className="emailGroup contactElement"
                onMouseOver={mouseEnterEmail}
                onMouseLeave={mouseLeave}>
                    <img className='contactIcon' src={Email}/>
                    <h3 className='contactEmail'>{emailText}</h3>
                </a>
                <div className="phoneGroup contactElement"
                onMouseOver={mouseEnter}
                onMouseLeave={mouseLeave}>
                    <img className='contactIcon' src={Phone}/>
                    <h3 className='contactPhone'>415.430.5430</h3>
                </div>
                <a href='https://www.linkedin.com/in/texopolis/'
                className="linkedinGroup contactElement"
                onMouseOver={mouseEnter}
                onMouseLeave={mouseLeave}>
                    <img className='contactIcon' src={LinkedIn}/>
                    <h3 className='contactLinkedin'>linkedin</h3>
                </a>
                <a href='https://github.com/Texopolis'
                className="githubGroup contactElement"
                onMouseOver={mouseEnter}
                onMouseLeave={mouseLeave}>
                    <img className='contactIcon' src={Github}/>
                    <h3 className='contactGithub'>github</h3>
                </a>

            </div>
        </div>
    )
}