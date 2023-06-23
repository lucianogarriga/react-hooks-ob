import React from 'react';
import Child from '../pure/child';

const Father = () => {

    function showMessage(text){
        alert(`Mensaje recibido desde el hijo: ${text}`)
    }

    return (
        <div>
            <Child name="Child" send={showMessage}></Child>
        </div>
    );
}

export default Father;
