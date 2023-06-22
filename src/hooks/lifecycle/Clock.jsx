/**
 * Ejemplo de uso DidMount - LifeCycle
 * - Metodo en Componente Tipo Clase
 * - Hook en Componente Tipo Funcion
 */

import React, { useState, useEffect } from "react";

// HOOK - COMPONENTE FUNCION

const Clock = () => {
  // useState - Se reemplaza el constructor y el estado inicial del componente
  // uso de setFecha y setEdad para actualizar ambas variables iniciales

  const [fecha, setFecha] = useState(new Date());
  const [edad, setEdad] = useState(0);
  const nombre = 'Martin';
  const apellidos = 'San Jose' 
 

  useEffect(() => {

    // componentDidMount()
    console.log("Componente creado");

    // en el setInterval, llamamos a la función tick cada 1 segundo
    // la funcion tick se pasa como callback a setInterval
    // luego al ID del temporizador lo guardamos en la var timerID
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      // componentWillUnmount
      console.log("Limpieza del temporizador al desmontar el componente"); 
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setFecha(new Date())
    setEdad(edad + 1)
  }

  return (
    <div>
      <h2>
        Hora Actual:
        {fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {nombre} {apellidos}
      </h3>
      <h1>Edad: {edad}</h1>
    </div>
  );
};
export default Clock;