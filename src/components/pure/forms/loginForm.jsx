/**
 * Componente que va a contener un formulario
 * p/ autenticacion de usuarios
 */

import React, {useState} from 'react';


const LoginForm = () => {

    // P/ controlar un User inicial

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
