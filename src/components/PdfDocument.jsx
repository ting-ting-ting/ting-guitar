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
  line: {
    marginBottom: 30,
  },
  lineTitleWrapper: {
    marginBottom: 8,
  },
  lineTitle: {
    fontFamily: 'Noto Sans TC',
    color: '#803220',
    fontWeight: '600',
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
        {lines.map(line => (
          <View style={styles.line}>
            {!!line.title && (
              <View style={styles.lineTitleWrapper}>
                <Text style={styles.lineTitle}>{line.title}</Text>
              </View>
            )}
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default React.memo(PdfDocument);
