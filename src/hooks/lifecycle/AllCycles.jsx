import React, {useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        // Efecto - if, for, etc.
        console.log('Componente creado');

        const intervalID = setInterval(()=> {
            document.title = `${new Date()}`;
            console.log('Actualizacion del componente');
        }, 1000)

        return () => {
            console.log('Componente va a desaparecer'); 
            document.title = 'Tiempo Detenido';
            clearInterval(intervalID);
        };
    }, []);


    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
