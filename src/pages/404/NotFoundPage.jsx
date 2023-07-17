import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    const goTo = (path) => {
        navigate(path)
    }


    return (
        <div>
            <h2> 404 - Page Not Found</h2>
            <button onClick={goBack}>Go Back</button>
            <button onClick={() => goTo('/')}>Go Home</button>
        </div>
    );
}

export default NotFoundPage;
