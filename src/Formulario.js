import React, { useState } from 'react';

const FormularioRegistro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState(''); // Usamos esto para el radio 
  const [ciudad, setCiudad] = useState('');
  const [intereses, setIntereses] = useState([]); // Usamos esto para checkbox 
  const [comentarios, setComentarios] = useState('');

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
    // Aquí puedes enviar los datos del formulario a tu servidor
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
    // Luego de enviar los datos, puedes reiniciar los estados para limpiar el formulario
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
    //  "Eliminar Formulario"
    setNombre('');
    setEmail('');
    setTelefono('');
    setEdad('');
    setGenero('');
    setCiudad('');
    setIntereses([]);
    setComentarios('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="edad">Edad:</label>
        <input type="number" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} required />
      </div>
      <div>
        <label>Género:</label>
        <label>
          <input type="radio" name="genero" value="masculino" checked={genero === 'masculino'} onChange={() => setGenero('masculino')} />
          Masculino
        </label>
        <label>
          <input type="radio" name="genero" value="femenino" checked={genero === 'femenino'} onChange={() => setGenero('femenino')} />
          Femenino
        </label>
        <label>
          <input type="radio" name="genero" value="otro" checked={genero === 'otro'} onChange={() => setGenero('otro')} />
          Otro
        </label>
      </div>
      <div>
        <label htmlFor="ciudad">Ciudad:</label>
        <select id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} required>
          <option value="">Selecciona una ciudad</option>
          <option value="ciudad1">Ciudad 1</option>
          <option value="ciudad2">Ciudad 2</option>
          <option value="ciudad3">Ciudad 3</option>
        </select>
      </div>
      <div>
        <label>Intereses:</label>
        <label>
          <input type="checkbox" value="Té" checked={intereses.includes('Té')} onChange={handleInteresesChange} />
          Té
        </label>
        <label>
          <input type="checkbox" value="Sabores" checked={intereses.includes('Sabores')} onChange={handleInteresesChange} />
          Sabores
        </label>
        <label>
          <input type="checkbox" value="Temperaturas" checked={intereses.includes('Temperaturas')} onChange={handleInteresesChange} />
          Temperaturas
        </label>
      </div>
      <div>
        <label htmlFor="comentarios">Comentarios:</label>
        <textarea id="comentarios" value={comentarios} onChange={(e) => setComentarios(e.target.value)}></textarea>
      </div>
      <button type="submit">Enviar</button>
      {/* Botón para eliminar todo el formulario */}
      <button type="button" onClick={handleEliminar}>
        Eliminar Formulario
      </button>
    </form>
  );
};

export default FormularioRegistro;