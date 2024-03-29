import React, { useState } from 'react'

export default function About(props) {

  // This is not needed now in case when we disable "enable dark moade button" in about page separatly and also modify it in some other manners.

  // const [myStyle, setMyStyle]= useState({
  //  color: 'black',
  //  backgroundColor: 'white'
  // })

  //const[ btntext, setBtnText]= useState("Enable Dark Mode")
  
  // const toggleStyle = ()=>{
  //   if(myStyle.color === 'black'){
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '1px solid white'  
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'  
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  // }

  let myStyle = {
    color : props.mode ==='dark'?'white':'#42743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',

    //Depend on your choice that you want to use or not
    // border: '2px solid' ,
    // borderColor: props.mode ==='dark'?'white':'#42743',
  }

            return (
              <div className="container" style={{color : props.mode ==='dark'?'white':'#42743'}}>
                  <h1 className="my-3">About us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>Analyze Your Text</strong> 
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                </div>
              </div>
            </div>
            <div className="accordion-item" style={myStyle}>
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong>Free To Use</strong>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  Textutils is a free character counter tool that provides instant character count and word count statistics for a given text.  Textutils reports the number of words and chracters. Thus it is suitable for writing text with word/ character limit.
                </div>
              </div>
            </div>
            <div className="accordion-item" style={myStyle}>
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  This word counter software works in any web browsers such as chrome, Firefox, Internet explorer, Safari, opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
              </div>
            </div>
          </div>
          {/* <div classNameName="container my-3">
          <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
          </div> */}
              </div>
  )
}
