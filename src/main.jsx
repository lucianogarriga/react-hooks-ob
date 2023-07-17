import React from 'react'
import ReactDOM from 'react-dom/client'

// Agregamos Bootstrap al proyecto
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx'

// ! Los estilos propios deben ir luego de importar Bootstrap
import './index.css'
import AppRoutingOne from './AppRoutingOne.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRoutingOne/>
  </React.StrictMode>,
)
