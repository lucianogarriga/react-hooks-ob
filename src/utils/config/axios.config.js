import axios from 'axios';

// Default config for AXIOS

export default axios.create(
    {
        baseURL: 'https://randomuser.me/api',
        responseType: 'json',
        // Peticiones fallan si pasan + 6 segundos
        timeout: 6000
    }
)