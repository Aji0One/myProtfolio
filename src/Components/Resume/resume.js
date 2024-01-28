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
        href="https://drive.google.com/file/d/1L_ns2RRtdB1gLzz1KzbvW_vk4h_n36fD/view"
        className="btn"
        onMouseOver={handleBtn}
      >
        {state ? "Download Resume" : "View and Download Resume"}
      </a>
    </div>
  );
};

export default Resume;
