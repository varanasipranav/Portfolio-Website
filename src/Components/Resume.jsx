import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import resume from '../Assets/Pranav_Varanasi_Resume.pdf'; // Assuming your resume is named Pranav_Varanasi_Resume.pdf in the Assets folder

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <h1 style={{ fontFamily: "Sixtyfour Convergence", textAlign: "center" }}>Resume</h1>

      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default Resume;