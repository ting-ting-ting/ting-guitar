import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';

const PdfViewer = ({
  name,
  lines,
}) => {
  return (
    <PDFViewer>
      <PdfDocument name={name} lines={lines} />
    </PDFViewer>
  );
};

export default React.memo(PdfViewer);
