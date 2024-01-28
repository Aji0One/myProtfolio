import "./WorkCardStyle.css";
import React from "react";
import WorkCardData from "./WorkCardData";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      {/* <div className="credential">
        <p className="credName">Credentials</p>
        <p>
          Email : <q>test123@gmail.com</q>{" "}
        </p>
        <p>
          Password: <q> test123/test12345</q>
        </p>
        <p>
          key: <q> test123/test12345</q>
        </p>
      </div> */}
      <div className="project-container">
        {WorkCardData.map((ele, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={ele.imgsrc}
              title={ele.title}
              text={ele.text}
              view={ele.view}
              frosrc={ele.frosrc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
