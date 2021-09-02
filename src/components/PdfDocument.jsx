import React from 'react';
import { Document, Page, Text, View, Font, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  title: {
    fontFamily: 'ZCool',
  },
});

Font.register({
  family: 'ZCool',
  src: 'https://fonts.gstatic.com/s/zcoolkuaile/v7/tssqApdaRQokwFjFJjvM6h2WpozzoXhC2g.ttf'
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
