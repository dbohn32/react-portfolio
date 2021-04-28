import React from "react";

function ProjectCard(props) { 
  return (
   <div className="col-md-6 mt-3 mb-3">
    <div className="card h-100">
      <img className="card-img-top" src={props.imgSrc} alt={props.altText}/>
      <div className="card-body d-flex p-0"></div>
      <div className="card-footer bg-dark text-light p-0">
        <a href={props.gitHubURL} alt={props.altText} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg btn-block active img-caption mt-auto" role="button" id="img-btn">{props.label}</a>
      </div>
    </div>

    </div>
  )
};

export default ProjectCard;