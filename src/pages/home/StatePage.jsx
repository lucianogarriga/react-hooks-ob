import React from 'react';
import {useLocation } from 'react-router-dom';

const StatePage = () => {

    const location = useLocation(); 
    const searchParams = new URLSearchParams(location.search);
    const online = searchParams.get('online')


    console.log('Query params ', online);

    return (
        <div>
            <h1>State: {location.state && location.state.online ? 'The user is online' : 'The user is offline'}</h1>
            <h1>Query Params: {online ? 'The user is online' : 'The user is offline'}</h1>
        </div>
    );
}

export default StatePage;
