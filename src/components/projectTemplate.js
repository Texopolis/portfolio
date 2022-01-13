import { render } from '@testing-library/react';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function ProjectTemplate (props){

const navigate=useNavigate()

    return(
    <>  
        <div id='backBtn' onClick={()=>navigate(-1)}></div>
        <div className="projectTemplate">
            <div className="projectTemplateLeft">
                <h2 className="projectTemplateTitle major">{props.projectTemplateTitle}</h2>
                <h4 className='projectTemplateRole'>{props.projectTemplateRole}</h4>
                <p className="projectTemplateDescription">{props.projectTemplateDescription}
                <p className='projectTemplateNotes'>{props.projectNotes}</p>
                    <div className='projectTemplateTechGrid'>
                        <div className={props.htmlIcon}></div>
                        <div className={props.cssIcon}></div>
                        <div className={props.javaScriptIcon}></div>
                        <div className={props.reactIcon}></div>
                        <div className={props.solidityIcon}></div>
                    </div>
                </p>
            </div>
            <div className="projectTemplateRight">
                <a className='projectTemplateCodeLink' href={props.projectTemplateCodeLink} target='_blank'>code</a> 
                <Link className='projectTemplateVideoLink' to={props.projectTemplateVideoLink}>{props.ProjectTemplateVideoText}</Link> 
                <a className="projectTemplateWorkingSiteLink" href={props.projectTemplateWorkingSiteLink} target='_blank'>live site</a>
            </div>
        </div>
    </>
)
}