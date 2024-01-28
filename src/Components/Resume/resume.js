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
        href="https://drive.google.com/file/d/1L_ns2RRtdB1gLzz1KzbvW_vk4h_n36fD/view?google_abuse=GOOGLE_ABUSE_EXEMPTION%3DID%3D56a4f3817bb827c7:TM%3D1706432431:C%3Dr:IP%3D157.51.160.104-:S%3DzUzCL2FmXcrAyiBS-G29iSk%3B+path%3D/%3B+domain%3Dgoogle.com%3B+expires%3DSun,+28-Jan-2024+12:00:31+GMT"
        className="btn"
        onMouseOver={handleBtn}
      >
        {state ? "Download Resume" : "View and Download Resume"}
      </a>
    </div>
  );
};

export default Resume;
