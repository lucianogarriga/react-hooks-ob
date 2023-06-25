import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Carlos');

    function showMessage(text){
        alert(`Mensaje recibido desde el hijo: ${text}`)
    }

    function updateName(newName){
        setName(newName)
        console.log(`El nuevo nombre es: ${newName}`)
    }

    return (
        <div>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
