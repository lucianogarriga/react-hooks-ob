import React, {useRef} from 'react';

const Practica = () => {

    const msgRef = useRef('')

    const butPress = () =>{ 
        const text = msgRef.current.value;
        console.log(text);
    }

    return (
        <div style={{padding: '4rem'}}> 
            <button style={{margin: '1.5rem'}}
                    onClick={butPress} 
                    onMouseOver={() => console.log('MouseOverOn')}
            >Add new task</button>
            <input placeholder='Insert new task' 
                ref={msgRef}
            /> 
        </div>
    );
}

export default Practica;
