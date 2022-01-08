import React, { useState } from 'react';
import Email from '../images/email.png';
import Resume from '../images/resumeIcon.png';
import Github from '../images/github.png';
import LinkedIn from '../images/linkedin.png';
import DBResume from '../images/Douglas_Bernstein_-_Front-End_Web_Developer.pdf'

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
            <h2 className='contactTitle'>let's connect!</h2>
            <div className='contactGroup'>
                <a href="mailto:0douglasbernstein@gmail.com"
                className="emailGroup contactElement"
                onMouseOver={mouseEnterEmail}
                onMouseLeave={mouseLeave}>
                    <img className='contactIcon' src={Email}/>
                    <h3 className='contactEmail'>{emailText}</h3>
                </a>
                <a href='https://www.linkedin.com/in/texopolis/' target ='_blank'
                className="linkedinGroup contactElement"
                onMouseOver={mouseEnter}
                onMouseLeave={mouseLeave}>
                    <img className='contactIcon' src={LinkedIn}/>
                    <h3 className='contactLinkedin'>linkedin</h3>
                </a>
                <a href='https://github.com/Texopolis' target ='_blank'
                className="githubGroup contactElement"
                onMouseOver={mouseEnter}
                onMouseLeave={mouseLeave}>
                    <img className='contactIcon' src={Github}/>
                    <h3 className='contactGithub'>github</h3>
                </a>
                <a href= {DBResume} target ='_blank'
                className="resume Group contactElement"
                onMouseOver={mouseEnter}
                onMouseLeave={mouseLeave}>
                    <img className='contactIcon' src={Resume}/>
                    <h3 className='contactResume'>resume</h3>
                </a>

            </div>
        </div>
    )
}