const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const exLongChar = /^(?=.{1,35}$).+/;
const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/;

function validation(data) {
  let newErrors = {};

  if (!data.email) {
    newErrors.email = "Email vacío";
  } else if (!regexEmail.test(data.email)) {
    newErrors.email = "Email inválido";
  } else if (!exLongChar.test(data.email)) {
    newErrors.email = "Máximo 35 caracteres";
  } else {
    newErrors.email = ""; // No hay errores
  }

  if (!regexPassword.test(data.password)) {
    newErrors.password =
      "La contraseña debe tener al menos un número y estar entre 6 y 10 caracteres";
  } else {
    newErrors.password = ""; // No hay errores
  }

  return newErrors;
}

export default validation;
