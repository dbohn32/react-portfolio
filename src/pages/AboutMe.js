import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

function AboutMe() {
    return (
        <div>
          <Header>
          </Header>
            <div className="container-fluid">
            <div className="row mt-4">
              <About>
              </About>
            </div>
            </div>
            <Footer></Footer>
        </div>
      )}
export default AboutMe