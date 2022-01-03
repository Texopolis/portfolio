import React, { useState } from "react"




export default function GridContainer(props){
    // const [cellColor, setCellColor] = useState('cell')
    const gridArray = new Array(2000).fill(<div className={props.cellColor}></div>);

    // gridArray[480]=<div className={cellColor}></div>
    // gridArray[555]=<div className={cellColor}></div>
    // gridArray[630]=<div className={cellColor}></div>
    // gridArray[705]=<div className={cellColor}></div>
    // gridArray[780]=<div className={cellColor}></div>
    // gridArray[855]=<div className={cellColor}></div>
    // gridArray[930]=<div className={cellColor}></div>
    // gridArray[1005]=<div className={cellColor}></div>
    // gridArray[1080]=<div className={cellColor}></div>

//grid increments by 75

return(
        
    <div id="gridContainer" className="gridContainer" >
        <div className="horizon"></div>
        <div id="grid">
            {gridArray}
        </div>
        {/* <div id='gridSun'></div> */}
    </div>)

    
    
}


// const animateCellAbout=() => {
   
//     setTimeout(()=>{
//        console.log('first')
//         gridArray[630]=<div className='testCell'></div>},500)
//    setTimeout(()=>{
//         gridArray[705]=<div className='testCell'></div>},1000)
//    setTimeout(()=>{
//         gridArray[780]=<div className='testCell'></div>},1500)
//    setTimeout(()=>{
//         gridArray[855]=<div className='testCell'></div>},2000)
//     console.log('clicked')                            
//    }

    
     

// const animateCellProjects=() => {
//     console.log('clicked2')
//     setCellColor('cellProjects')
// }


