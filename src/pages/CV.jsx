import React from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import resume from "../assets/resume.pdf";

function CV() {
  return (
    <div className="CV">
      <h1>Resume</h1>
      <Document
        className={"pdf"}
        file={resume}
      >  
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default CV;
