import React from 'react';
import {useNavigate} from 'react-router-dom';

const ProfilePage = ({user}) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
    const goTo = (path) => {
        navigate(path)
    }

    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={() => goTo("/tasks")}>Your tasks</button>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default ProfilePage;
