import axios from 'axios';

// Create Login Method

/**
 * Login Method to ReqRes Endpoint
 * @param { string } email
 * @param { string } password
 */

export const login = (email, password) => {

    let body = { 
        email: email,
        password: password
    }

    // Return a Promise
    // So, we must consume it with .then()
    return axios.post('https://reqres.in/api/login', body)
}

// Obtain all users

export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users');
}

// Obtain All page users

export const getAllPageUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

// Obtain User by ID

export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

// Create User

export const createUser = (name, job) => {

    let body = { 
        name: name,
        job: job
    }

    // Return a Promise
    // So, we must consume it with .then()
    return axios.post('https://reqres.in/api/users', body) 
}

// Update User  (PUT to change ALL or PATH to change a prop)

export const updateUser = (id, name, job) => {

    let body = { 
        name: name,
        job: job
    }

    // Return a Promise
    // So, we must consume it with .then()
    return axios.put(`https://reqres.in/api/users/${id}`, body) 
}

// Delete User

export const deleteUser = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}