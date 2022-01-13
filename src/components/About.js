import React from "react";

export default function About(){
    return(
        <div className="about" id='about'>
                <svg id='svgBottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#deff00" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,133.3C672,107,768,53,864,74.7C960,96,1056,192,1152,202.7C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className="aboutContainer">
                 <h2 className='aboutTextTitle'>Hey there!</h2>
                 <div className="aboutSection">
                     <div className='portrait'></div>
                     <h2 className='aboutText'>
                         My name is Douglas Bernstein and I'm a technophile child of the 80s, accomplished chef and having traded knives for keyboards, I now develop interactive, responsive and purposeful websites and applications.<br/>
                         <br/>
                         By building on the experience that has brought me success leading teams for the last 20 years, I've learned the same set of problem solving skills necessary to running successful restaurants translates directly to solving problems in code. Recipes become algorithms and although the language is different, the logic is the same. <br/>
                         <br/>
                         If you have any questions or comments about the projects featured here, please feel free to reach out- I'd love to hear from you!<br/>
                         <br/>
                         I currently reside in Berkeley, CA and my free time is consumed with furniture woodworking projects (anything that involves building with my hands), gardening and walking my spaghetti obsessed dog.
                     </h2>
                 </div>
                 {/* <p className='aboutText'>(to see more about my 'old' life <a href="#">click here)</a></p> */}
        </div>

         </div>
     )
}