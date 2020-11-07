import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import PropTypes from 'prop-types';
import './Pdfcard.scss';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default function Pdfcard(props) {
  const { pdf, pageNumber } = props;

  return (
    <div className="pdfcard">
      <div className="pdfcard__cover">
        <Document
          file={pdf}
          options={options}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div className="pdfcard__bookname">
        Unix programming philosophy
      </div>
    </div>
  );
}

Pdfcard.defaultProps = {
  pdf: '',
  pageNumber: 1,
};

Pdfcard.propTypes = {
  pdf: PropTypes.string,
  pageNumber: PropTypes.number,
};
