import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/fetchService';


const FetchExample = () => {

    const [users, setUsers] = useState(0);

    useEffect(() => {
        
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All users: ', response.data);
                setUsers(response.data)
            })
            .catch((error) => alert(`Error retreiving users => ${error}`))
            .finally(() => {
                console.log('Users obtained')
                console.table(users)
            })
    }

    return (
        <div>
            <h1>Fetch Example</h1>
            {
                users.map(user => {
                    <ul>
                        <li>{user.first_name}</li>
                    </ul>
                })
            }
        </div>
    );
}

export default FetchExample;
