/**
 * Ejemplo de uso DidMount - LifeCycle
 * - Metodo en Componente Tipo Clase
 * - Hook en Componente Tipo Funcion
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el comopnente sea anadido al DOM (renderice)');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

// HOOK - COMPONENTE FUNCION

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el comopnente sea anadido al DOM (renderice)');
    }, [])
    
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

