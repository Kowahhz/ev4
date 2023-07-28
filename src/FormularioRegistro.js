import React, { useState } from 'react';
import { validateNombre, validateEmail, validateTelefono, validateEdad } from './validations';

const FormularioRegistro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [intereses, setIntereses] = useState([]);
  const [comentarios, setComentarios] = useState('');
  const [errors, setErrors] = useState({});

  const handleInteresesChange = (e) => {
    const value = e.target.value;
    if (intereses.includes(value)) {
      setIntereses(intereses.filter((item) => item !== value));
    } else {
      setIntereses([...intereses, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los campos 
    const nombreError = validateNombre(nombre);
    const emailError = validateEmail(email);
    const telefonoError = validateTelefono(telefono);
    const edadError = validateEdad(edad);

    // Actualizar el estado de errores
    setErrors({
      nombre: nombreError,
      email: emailError,
      telefono: telefonoError,
      edad: edadError,
    });

    // Verificar si hay errores de validación
    if (nombreError || emailError || telefonoError || edadError) {
      // Si hay errores, detener la función y no enviar los datos
      return;
    }

    // Aquí puedes enviar los datos del formulario a tu servidor o realizar alguna acción con ellos
    console.log({
      nombre,
      email,
      telefono,
      edad,
      genero,
      ciudad,
      intereses,
      comentarios,
    });

    // Luego de enviar los datos, puedes limpiar el formulario reiniciando los estados
    setNombre('');
    setEmail('');
    setTelefono('');
    setEdad('');
    setGenero('');
    setCiudad('');
    setIntereses([]);
    setComentarios('');
  };

  const handleEliminar = () => {
    // Limpia todos los campos al hacer clic en "Eliminar"
    setNombre('');
    setEmail('');
    setTelefono('');
    setEdad('');
    setGenero('');
    setCiudad('');
    setIntereses([]);
    setComentarios('');
    setErrors({}); // También limpiamos los errores
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        {errors.nombre && <span>{errors.nombre}</span>} {/* Mostrar mensaje de error */}
      </div>
      {/* Resto de los campos del formulario */}
      {/* ... */}
      <button type="submit">Enviar</button>

      {/* Botón para eliminar los datos */}
      <button type="button" onClick={handleEliminar}>Eliminar</button>

      {/* Mostrar los datos ingresados */}
      <div>
        <h2>Datos ingresados:</h2>
        <p>Nombre: {nombre}</p>
        <p>Email: {email}</p>
        <p>Teléfono: {telefono}</p>
        <p>Edad: {edad}</p>
        <p>Género: {genero}</p>
        <p>Ciudad: {ciudad}</p>
        <p>Intereses: {intereses.join(', ')}</p>
        <p>Comentarios: {comentarios}</p>
      </div>
    </form>
  );
};

export default FormularioRegistro;