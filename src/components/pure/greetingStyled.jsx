import React from "react";
import { useState } from "react";

// Definiendo estilos en constantes

// Estilos para Usuario Logueado
const loggedStyles = {
  color: "lightgreen",
};

// Estilos para Usuario NO Logueado

const unloggedStyles = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyled = (props) => {
  // Generamos un estado para el componente
  // y asi controlar si el User esta logueado o no.

  const [logged, setLogged] = useState(false);
  
  // Guardamos el contenido del renderizado condicional en variables
  // Puede ser una simple variable, o una funcion. (ejemplo de ambos)
  const greetingUser = (<h2>Hello, {props.name}</h2>);
  const pleaseLogin = () => (<h2>Welcome, please login</h2>);

  return (
    <div style={logged ? loggedStyles : unloggedStyles}>
        {logged ? 
            greetingUser
            : 
            pleaseLogin()
        }

      <button
        onClick={() => {
          console.log("Boton Pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
