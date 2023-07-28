import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Formulario from './Formulario';
import FormularioRegistro from './FormularioRegistro';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Interfaz usuario</h1>
      <Menu />
      <h2>Formulario </h2>
      <Formulario />
      <h2>Mostrar</h2>
      <FormularioRegistro />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);