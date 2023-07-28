export const validateNombre = (nombre) => {
    if (nombre.trim() === '' || nombre.length > 50) {
      return 'Por favor, ingrese un nombre válido (máximo 50 caracteres).';
    }
    return '';
  };
  
  export const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return 'Por favor, ingrese un correo electrónico válido.';
    }
    return '';
  };
  
  export const validateTelefono = (telefono) => {
    if (telefono.length > 15) {
      return 'Por favor, ingrese un número de teléfono válido (máximo 15 caracteres).';
    }
    return '';
  };
  
  export const validateEdad = (edad) => {
    if (edad.length > 3) {
      return 'Por favor, ingrese una edad válida (máximo 3 dígitos).';
    }
    return '';
  };