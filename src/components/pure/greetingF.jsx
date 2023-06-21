import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {

  // const [variable, metodo p/ actualizarla] = useState(valorInicial)
  const [age,setAge] = useState(29);

  const birthday = () => {
    // Actualizamos el State
    setAge(age + 1)
  }

  return (
    <div>
      <h2>Bienvenido {props.name} desde componente funcional</h2>
      <span>Tu edad es de {age} años</span>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
    name: PropTypes.string,
};

export default GreetingF;
