import React from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { Page as PageStyle } from '../components/PageElements';
import resume from "../assets/resume.pdf";

function CV() {
  return (
    <div className="CV">
      <PageStyle.CenterHeader>Resume</PageStyle.CenterHeader>
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
