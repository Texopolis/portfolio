import React from "react";
import downArrow from '../images/downArrow.png'

export default function HomePage(){
    return(
        <div className="homePage">
            <div className="container">
                <p className='major'>hI i'm douGlas,</p>
                <p className='major'>a FronTend develOper</p>
                <div className='homePageDescriptionGroup'>
                    <p className='homePageDescript'>Solidity</p>
                    <p className='homePageDescript'>react </p>
                    <p className='homePageDescript'>javaScript</p>
                    <p className='homePageDescript'>Node.js</p>
                    <p className='homePageDescript'>Express</p>
                    <p className='homePageDescript'>mongodb</p>
                    <p className='homePageDescript'>HTML</p>
                    <p className='homePageDescript'>CSS</p>
                </div>
            </div>
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