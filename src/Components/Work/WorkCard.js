

import React from 'react'
import { NavLink } from "react-router-dom";


const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project-img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>

        <div className="pro-btns">
          <a target="_blank" href={props.view} className="btn">View</a>
          <a target="_self" href={props.src} className="btn">Source</a>
        </div>
      </div>
    </div>
  )
}

export default WorkCard;
