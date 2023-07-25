export const getAllUsers = async() => {
    let URL = 'https://reqres.in/api/users';
    let response = await fetch(URL);
    console.log(response);
    return response.json();
}