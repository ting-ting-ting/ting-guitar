import React from 'react';
import { Document, Page, Text, View, Font, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: '40px 15px',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    fontFamily: 'Noto Sans TC',
    color: '#633919',
  },
});

Font.register({
  family: 'Noto Sans TC',
  src: 'https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.otf',
});

// Create Document Component
const PdfDocument = ({
  name,
  lines,
}) => {
  console.log('lines', lines, name);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{name}</Text>
      </Page>
    </Document>
  );
};

export default React.memo(PdfDocument);
