/**
 * EJEMPLO HOOKS
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from "react";

/**
 *
 * @returns Componente 1
 * Dispone de un contextoque va a tener un valor
 * que recibe desde el padre
 */

// Inicializamos un estado vacío, que rellenaremos con datos del padre
const miContexto = React.createContext(null);

const Componente1 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      {/* Enviamos datos del componente padre */}
      <h1>El token es: {state.token}</h1>
      {/* Pintamos el componente 2 */}
      <Componente2 />
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesión es: {state.sesion}</h2>
    </div>
  );
};

export default function MiComponenteContexto() {
  // Creamos un estado inicial, como el estado compartido entre todos los componentes
  // Valores default

  const estadoInicial = {
    token: "1234567",
    sesion: 1,
  };

  // Creamos el estado de este Componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSession() {
    setSessionData({
      token: parseInt(Math.random() * 23467) + "A",
      sesion: sessionData.sesion + 1,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que esté aquí dentro puede leer los datos de sessionData*/}
      {/* Además, si se actualiza, los componentes de aquí dentro también lo harán */}
      <Componente1 />
      <button onClick={actualizarSession}>Actualizar Sesion</button>
    </miContexto.Provider>
  );
}
