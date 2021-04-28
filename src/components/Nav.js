import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <div className="container-nav">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
          </Link>
          <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
        </div>
    

  );
}

export default NavBar;
