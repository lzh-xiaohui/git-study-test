import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import {App1} from './pages/Protable';
import { App2 } from './pages/mainLayout';
import reportWebVitals from './reportWebVitals';
import { App3 } from './pages/one/Detail';
// import { App4 } from './pages/two/Config';
// import { App4 } from './pages/three/process';
import { App4 } from './pages/four/StepFrom';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
