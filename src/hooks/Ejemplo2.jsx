/**
 * Ejemplo de uso:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useEffect, useRef } from "react";

const Ejemplo2 = () => {
  // 1. Crear 2 contadores diferentes, c/u con estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // 2. Crear referencia con useRef()
  // P/ asociar una variable con un elemento del DOM del componente
  // (vista HTML)
  const miRef = useRef();

  // 3. Crear 2 funciones p/ ejecutar los metodos set
  function incrementar1(){
    setContador1(contador1 + 1);
  }

  function incrementar2(){
    setContador2(contador2 + 1);
  }
  /**
   * 4. Trabajando con useEffect
   */

  /**
   * Caso 1: Ejecutar SIEMPRE un snippet de código
   * Cada vez que haya un cambio en el estado del componente
   * se ejecuta lo que esté dentro del useEffect()
   */

  // CASO 1 => useEffect
  // useEffect(() => {
  //   console.log("Cambio en el Estado del Componente");
  //   console.log("Mostrando Referencia a elemento del DOM:");
  //   console.log(miRef);
  // } )

  // CASO 2 => useEffect
  // Ejecutar sólo cuando CAMBIE - CONTADOR1

  // useEffect(()=> {
  //   console.log("Cambio el Estado del Contador1");
  // }, [contador1])

  // CASO 3 => useEffect
  // Ejecutar cuando CAMBIE Contador1 || Contador2
    useEffect(()=>{
      console.log("Ha cambiado el estado del Contador1||Contador2");
    }, [contador1, contador2])

  return (
    <div>
      <h2>Ejemplo de Hooks</h2>
      <h3>useState(), useRef(), useEffect()</h3>
      {/* Elemento referenciado */}
      <h4 ref={miRef}> 

      </h4>

      {/* Botones para cambiar los estados */}
      <div>
        <button onClick={incrementar1}>Incrementar 1: {contador1}</button>
        <button onClick={incrementar2}>Incrementar 2: {contador2}</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
