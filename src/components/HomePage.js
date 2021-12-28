import React from "react";
import downArrow from '../images/downArrow.png'

export default function HomePage(){
    return(
        <div className="homePage">
            <p className='major'>hI i'm douGlas,</p>
            <p className='major'>a FrOnTenD Web develOper</p>
            <div className='homePageTag'>
                <p>projects</p>
                <div>
                    <img src={downArrow}/>
                    <img src={downArrow}/>
                </div>
            </div>


        </div>
        
    )
}