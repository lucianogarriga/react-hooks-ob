import React, { useState } from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {
        console.log('Subscription to Observable');

        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log(`New number: ${newNumber}`);
                    setNumber(newNumber)
                },
                error(error){
                    alert(`Something went wrong: ${error}`)
                },
                complete(){
                    alert(`Finished with: ${number}`);
                    console.log('Subscription Finished');
                }
            }
        )
    }

    return (
        <div>
            <h1>Observable</h1>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>Set number</button>
        </div>
    );
}

export default ObservableExample;
