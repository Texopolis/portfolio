import React from "react";

export default function About(){
    return(
        <div className="about" id='about'>
                <svg id='svgBottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5FFBF1" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,133.3C672,107,768,53,864,74.7C960,96,1056,192,1152,202.7C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className="aboutContainer">
                 <div className='portrait'></div>
                 <h2 className='aboutText'>
                     By using the skills I developed managing kitchen teams for the last 20 years, I have discovered the same problem solving skills necessary to running a successful restaurant translate directly to solving problems in code. Recipes become algorithims and although the language is different, the logic is the same. <br/>
                     My strong attetion to detail which put me in the position to manage large teams at multi-unit locations has enabled me to swiftly develop on new technologies without conventional training.
                 </h2>
                 {/* <p className='aboutText'>(to see more about my 'old' life <a href="#">click here)</a></p> */}
        </div>

         </div>
     )
}