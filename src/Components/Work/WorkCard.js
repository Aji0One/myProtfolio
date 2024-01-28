import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project-img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p style={{height:"100px"}}>{props.text}</p>

        <div className="pro-btns">
          <a target="_blank" href={props.view} className="btn">
            View
          </a>
          <a target="_self" href={props.frosrc} className="btn">
            FrontEnd
          </a>
          <a target="_self" href={props.bsrc} className="btn">
            Backend
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
