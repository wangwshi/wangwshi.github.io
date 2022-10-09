import React from "react";
import { Document } from 'react-pdf'

function CV() {
  return (
    <div className="CV">
      <h1>Resume</h1>
      <object className="pdf" data="./resume.pdf" type="application/pdf" width="100%" height="100%">
          <p>Alternative text - include a link to the PDF!</p>
      </object>
    </div>
  );
}

export default CV;
