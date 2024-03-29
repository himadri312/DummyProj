import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/Main';
import reportWebVitals from './reportWebVitals';
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.min.css'
import './layout/index.css'
import './layout/datatable.css'

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
