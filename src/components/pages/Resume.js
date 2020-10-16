
import React from "react";
// import { Document, Page } from 'react-pdf';
import { Container } from "reactstrap";
// import pdf from "./Kathleen_Kelly_Resume_Dev.pdf";


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/



export default function Resume() {
  return (
    <div className="Resume">
      <Container className="themed-container">
      <h1>Click link to view and download my resume</h1>
      <a href="https://docs.google.com/document/d/1srAfcL5tCjcfR3c9VXBsIIeT3fYwDBi85lHKJk6ZMR0/edit?usp=sharing" target="blank">View Resume</a>
      </Container>
    </div>


  );
}

// import React from 'react';
  // import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

// // Create Document Component
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );