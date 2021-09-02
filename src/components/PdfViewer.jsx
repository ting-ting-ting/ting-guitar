import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';

const PdfViewer = () => {
  return (
    <PDFViewer>
      <PdfDocument />
    </PDFViewer>
  );
};

export default React.memo(PdfViewer);
