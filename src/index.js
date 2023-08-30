import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify'; //First make toast container 
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <div>
    <App /> 
    <ToastContainer autoClose={500} position='top-right'/>
  </div>
);
