import React from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { Page as PageStyle } from '../components/PageElements';
import resume from "../assets/Hannah Wang Resume.pdf";

function CV() {
  console.log({resume});
  return (
    <div className="CV">
      <PageStyle.Header>Resume</PageStyle.Header>
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
