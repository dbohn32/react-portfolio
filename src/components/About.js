import React from "react"

function About(props) {
    return (
      <div className="col-md-8 offset-md-1">
            <div className="h2" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>About Me</div>
          <div>
            <div className="col-4 p-2 mb-4" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <img src="/images/profilepic.jpg" alt="Dan Bohn"/>
            </div>
          
          <div className="mb-5"> 
             <p> 
             Hello and welcome! My name is Dan Bohn. I am currently an Operations Manager 
          for a vending company in Indianapolis, Indiana.
          When I am not working, I am practicing my coding skills. I have a son who is 
          two years old. I also enjoy hiking, biking, camping and playing sports in my free
          time.
             </p>
            <br />
          </div>
      </div>
      </div>
    )
  }
  
  export default About;