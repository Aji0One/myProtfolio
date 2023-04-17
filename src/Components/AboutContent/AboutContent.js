import "./AboutContentStyle.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../../assets/react1.jpg";
import React2 from "../../assets/react2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a full stack developer. I create responsive secure websites in both
          frontend and backend. An enthusiastic Mern full-stack developer, keen
          to learn new technologies. Worked on live projects in a product based
          startup company as a backend developer in providing a protecive code
          to frontend.
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React2} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
