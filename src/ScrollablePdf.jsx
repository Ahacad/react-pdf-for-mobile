import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import PropTypes from 'prop-types';
import './ScrollablePdf.scss';

export default function ScrollablePdf(props) {
  const [numPages, setNumPages] = useState(null);
  const { pdf } = props;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="scrollable-pdf">
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ),
        )}
      </Document>
    </div>
  );
}

ScrollablePdf.defaultProps = {
  pdf: '',
};

ScrollablePdf.propTypes = {
  pdf: PropTypes.string,
};
