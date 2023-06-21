/**
 * Ejemplo de uso WillUnmount - LifeCycle
 * - Metodo en Componente Tipo Clase
 * - Hook en Componente Tipo Funcion
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}

// HOOK - COMPONENTE FUNCION

export const WillUnmountHook = () => {

    useEffect(() => { 
      return () => {
        console.log('Comportamiento antes de que el componente desaparezca');
      }
    }, []) 

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}
