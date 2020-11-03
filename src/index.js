import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import * as serviceWorker from './serviceWorker';
import ReactPDF from '@react-pdf/renderer';
import Resume from "./components/pages/Resume";

ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById("root")
);

// serviceWorker.unregister();



