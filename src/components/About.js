import React from "react";

export default function About(){
    return(
        <div className="about">
             <h2 className='aboutText'>
                 In 1984 I held a Speak and Spell for the first time and it was at that moment everything changed.<br></br> From then on I would forever be charmed by new technologies and thrown into a constant state of curiousity of how we can interact with machines.<br></br>It is only now, after a 25 year sucessful career in restaurants running large teams under countless pressures and deadlines, have I finally returned to pursue  developing and maintaing new technologies in the form of interactive, responsive websites and blockchain applications.
             </h2>
             <p className='aboutText'>(to see more about my 'old' life <a href="#">click here)</a></p>
             <div className="techStack">
                 <h2 className='techStackTitle'>technologies</h2>
                 <div className='techStackGrid'>
                    <div className='techCell htmlIcon'></div>
                    <div className='techCell cssIcon'></div>
                    <div className='techCell javaScriptIcon'></div>
                    <div className='techCell reactIcon'></div>
                    <div className='techCell solidityIcon'></div>
                </div>
             </div>

         </div>
     )
}