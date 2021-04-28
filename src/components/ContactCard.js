import React from "react";


function ContactCard(props) {
    return (

        <div className="contact-card">

            <div className="card">
                <h1 className="text-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Contact Me</h1>
                <div className="card-content" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}></div>
                <p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Phone: <a href= "tel: (317) 372-5487">(317) 372-5487 </a>
                </p>
                <p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> Email: <a href= "mailto: dbohn32@yahoo.com">dbohn32@yahoo.com</a>
                </p>
                <br/>
                <div>
                <a 
                  class="btn btn-lg btn-outline-light" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                  href="https://www.linkedin.com/in/dbohn32/"
                  target="-blank"
                  role="button"
                 >LinkedIn</a
                >
                </div>
                <br/>
               <a
                  class="btn btn-lg btn-outline-light" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                  href="https://github.com/dbohn32"
                  target="-blank"
                  role="button"
                  >GitHub</a> 
                  <br/>
                  
            </div>
        </div>
    );
 }

 export default ContactCard   