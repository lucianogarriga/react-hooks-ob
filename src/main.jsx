import React from 'react'
import ReactDOM from 'react-dom/client'
// Agregamos Bootstrap al proyecto
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'

// ! Los estilos propios deben ir luego de importar Bootstrap
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
