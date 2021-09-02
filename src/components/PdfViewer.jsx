import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';

const PdfViewer = ({
  lines,
}) => {
  return (
    <PDFViewer>
      <PdfDocument lines={lines} />
    </PDFViewer>
  );
};

export default React.memo(PdfViewer);
