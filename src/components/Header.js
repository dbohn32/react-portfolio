import React from "react";
import NavBar from "./Nav";



function Header(props) {
    return (
        <div className="container-fluid bg-light">
          <div className="row justify-content-between align-items-center">
            <div className="col-sm-3">
              <div className="row">
                <div className="col-sm-2 visible-md-* visible-lg-*"></div>
                <div className="col-md-6 text-center text-Black h1">
                 Dan Bohn
                </div>
              </div>
            </div>
            <div className="col-sm-3 justify-content-end text-lg-right text-md-center">
            <NavBar></NavBar>
              </div>
          </div>
        </div>
      );
    }

    export default Header;