import React from 'react';
// import Sample from './Sample';
import Pdfcard from './Pdfcard';
// import ScrollablePdf from './ScrollablePdf';

export default function All() {
  return (
    <div>
      <Pdfcard pdf="2.pdf" pageNumber={1} />
      <Pdfcard pdf="2.pdf" pageNumber={2} />
      <Pdfcard pdf="2.pdf" pageNumber={3} />
    </div>
  );
}
