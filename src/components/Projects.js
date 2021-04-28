import React from "react"
import ProjectCard from "./ProjectCard"


function Projects () {
    return (
        <div className= "container-fluid">
            <div className="h2">Portfolio</div>
            <div className= "row">

             <div className= "card-deck">
                 <ProjectCard
                 imgSrc="/images/covidproject.png"
                 altText="The Covid Project"
                 label="Covid Project"
                 gitHubURL="https://github.com/dbohn32/Covid-Project"
               ></ProjectCard>
               <ProjectCard
                 imgSrc="/images/burger.jpg"
                 altText="Burger"
                 label="Burger"
                 gitHubURL="https://github.com/dbohn32/burger"
               ></ProjectCard>
               <ProjectCard
                 imgSrc="/images/sufficientpurpose.png"
                 altText="Sufficient Purpose"
                 label="Sufficient Purpose"
                 gitHubURL="https://github.dbohn32/Sufficient-Purpose-Project"
               ></ProjectCard>
               <ProjectCard
                 imgSrc="/images/notetaker.png"
                 altText="Notetaker"
                 label="Notetaker"
                 gitHubURL="https://github.com/dbohn32/Note-Taker"
               ></ProjectCard>
               <ProjectCard
                 imgSrc="images/readmegen.png"
                 altText="ReadMe Generator"
                 label="ReadMe Generator"
                 gitHubURL="https://github.com/dbohn32/ReadMe-Generator"
               ></ProjectCard>
               <ProjectCard
                 imgSrc="images/weatherdashboard.png"
                 altText="Weather Dashboard"
                 label="Weather Dashboard"
                 gitHubURL="https://github.com/dbohn32/Weather-Dashboard"
               ></ProjectCard>
             </div>
            </div>
        </div>
    );
}

export default Projects