import React, { useState } from "react";

const Resume = () => {
  const [state, setState] = useState(false);
  const handleBtn = () => {
    setState(true);
  };
  return (
    <div style={{ display: "flex", margin: "0.5rem 0.5rem 0.5rem 2.2rem" }}>
      <a
        id="resume"
        target="_blank"
        href="https://drive.google.com/file/d/10L2rVKPPG52foPwI7i-ATsYcVI2gEzWJ/view"
        className="btn"
        onMouseOver={handleBtn}
      >
        {state ? "Download Resume" : "Click Here"}
      </a>
    </div>
  );
};

export default Resume;