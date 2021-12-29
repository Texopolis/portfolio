import { render } from '@testing-library/react';
import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function ProjectTemplate (props){

const navigate=useNavigate()

    return(
    <>  
        <div id='backBtn' onClick={()=>navigate(-1)}></div>
        <div className="projectTemplate">
            <div className="projectTemplateLeft">
                <h2 className="projectTemplateTitle major">{props.projectTemplateTitle}</h2>
                <p className="projectTemplateDescription">{props.projectTemplateDescription}</p>
            </div>
            <div className="projectTemplateRight">
                <a className="projectTemplateWorkingSiteLink" href={props.projectTemplateWorkingSiteLink}>live site</a>
                <a className='projectTemplateCodeLink' href={props.projectTemplateCodeLink}>code</a> 
                <div className='projectTemplateTechGrid'></div>
            </div>
        </div>
    </>
)
}