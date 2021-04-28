import React from "react";


function ContactCard(props) {
    return (

        <div className="contact-card">

            <div className="card">
                <h1 className="text-center">Contact Me</h1>
                <div className="card-content"></div>
                <p>Phone: <a href= "tel: (317) 372-5487">(317) 372-5487 </a>
                </p>
                <p> Email: <a href= "mailto: dbohn32@yahoo.com">dbohn32@yahoo.com</a>
                </p>
                <br/>
                <a
                  class="btn btn-lg btn-outline-light"
                  href="https://www.linkedin.com/in/dbohn32/"
                  target="-blank"
                  role="button"
                 >LinkedIn</a
                >
               <a
                  class="btn btn-lg btn-outline-light"
                  href="https://github.com/dbohn32"
                  target="-blank"
                  role="button"
                  >GitHub</a> 
            </div>
        </div>
    );
 }

 export default ContactCard   