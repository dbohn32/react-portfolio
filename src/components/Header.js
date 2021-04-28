import React from "react";
import NavBar from "./Nav";



function Header(props) {
    return (
        <div className="container-fluid bg-light">
          <div className="row justify-content-between align-items-center">
            <div className="col-sm-3">
              <div className="row">
                <div className="col-sm-2 visible-md-* visible-lg-*"></div>
                <div className="h1">
                 Dan Bohn
            <NavBar></NavBar>
              </div>
          </div>
        </div>
        </div>
        </div>
      );
    }

    export default Header;