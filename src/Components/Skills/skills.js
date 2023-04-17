import React from "react";
import { skillCategories } from "./skillCategory";
import "./skill.css";
const SkillsContainer = () => {
  return (
    <section className="skills">
      {skillCategories.map((ele, i) => (
        <div className="skillbox" key={i}>
          <img
            src={ele.img}
            alt={ele.skill}
            style={{ width: "22%", height: "fit-content" }}
          />
          <div
            style={{
              fontFamily: "fantasy",
              fontSize: "25px",
              margin: "0.6rem",
            }}
          >
            {ele.skill}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsContainer;
