import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import PropTypes from 'prop-types';
import './ScrollablePdf.scss';

export default function ScrollablePdf(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { pdf } = props;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-10);
  }

  function nextPage() {
    changePage(10);
  }

  return (
    <div className="scrollable-pdf">
      <div>
        <p>
          Page
          {' '}
          {pageNumber || (numPages ? 1 : '--')}
          {' '}
          of
          {' '}
          {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 10}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages - 10}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(
          new Array(10),
          (el, index) => (
            <Page
              key={`page_${index +  pageNumber}`}
              pageNumber={index + pageNumber}
            />
          ),
        )}
      </Document>
      <div>
        <p>
          Page
          {' '}
          {pageNumber || (numPages ? 1 : '--')}
          {' '}
          of
          {' '}
          {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 10}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages - 10}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

ScrollablePdf.defaultProps = {
  pdf: '',
};

ScrollablePdf.propTypes = {
  pdf: PropTypes.string,
};
