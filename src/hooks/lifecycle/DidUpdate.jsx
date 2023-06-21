/**
 * Ejemplo de uso DidUpdate - LifeCycle
 * - Metodo en Componente Tipo Clase
 * - Hook en Componente Tipo Funcion
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento al recibir nuevas props o modificacion del estado del componente');
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

// HOOK - COMPONENTE FUNCION

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento al recibir nuevas props o modificacion del estado del componente');
    })
    
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}
