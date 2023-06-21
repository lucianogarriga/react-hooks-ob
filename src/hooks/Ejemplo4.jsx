/**
 * Ejemplo - PROPS.CHILDREN
 */

import React from 'react'; 


const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de CHILREN.PROPS</h1>
            <h2>
                Nombre: {props.name}
            {/* props.children pinta por defecto lo que se encuentre
            entre las etiquetas de apertura y cierre de este componente
            desde el componente de orden superior (padre)
             */}
             {props.children}
            </h2>
        </div>
    );
};
 

export default Ejemplo4;
