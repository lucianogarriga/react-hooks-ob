/**
 * Ejemplo de uso - useState
 *
 * - Crear un componente tipo funcion
 * - Acceder a su estado privado mediante Hooks
 * - Y poder modificar su estado
 *
 * */

import React, { useState } from "react";

const Ejemplo1 = () => {
  // Valor inicial p/ un contador
  const valorInicial = 0;

  // Valor inicial p/ una persona
  const personaInicial = {
    nombre: "Martin",
    email: "martin@mail.com",
  };

  /**
   * Queremos que el valorInicial y personaInicial
   * sean parte del estado del componente p/ gestionar su cambio
   * y verlo reflejado en la vista del componente
   */
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Funcion p/ actualizar el estado privado del contador
   */
  function incrementarContador() {
    setContador(contador + 1);
  }

  /**
   * Funcion p/ actualizar el estado privado de persona
   * @ param {string}
   */
  function actualizarPersona(name) {
    setPersona({
      nombre: "Carlos",
      email: "carlos@example.com",
    });
  }

  return (
    <>
      <h2>Ejemplo 1: Uso de useState</h2>
      <div>
        <p>Contador: {contador}</p>
        <p>Nombre: {persona.nombre}</p>
        <p>Email: {persona.email}</p>
      </div>
      <div>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Actualizar persona</button>
      </div>
    </>
  );
};

export default Ejemplo1;
