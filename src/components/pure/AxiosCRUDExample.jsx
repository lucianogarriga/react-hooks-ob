import React from "react";
import {
  login,
  getAllPageUsers,
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser
} from "../../services/axiosCRUDService";

const AxiosCRUDExample = () => {
  const authUser = () => {
    login("eve.holt@reqres.in", "cityslicka")
      .then((response) => {
        if (response.data?.token) {
          alert(JSON.stringify(`Token: ${response.data?.token}`));
          sessionStorage.setItem("token", response.data?.token);
        } else {
          sessionStorage.removeItem("token");
          throw new Error("Login failure");
        }
        alert(JSON.stringify(response.data.token));
      })
      .catch((error) => {
        sessionStorage.removeItem("token");
        alert(`An error occurred: ${error}`);
      })
      .finally(() => console.log("Login done"));
  };

  // CRUD EXAMPLE

  // READ Users
  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => console.log(JSON.stringify(response.data.data)))
      .catch((error) => alert(`New error: ${error}`));
  };

  const obtainAllPagedUsers = (page) => {
    getAllPageUsers(page)
      .then((response) => console.log(JSON.stringify(response.data.data)))
      .catch((error) => alert(`New error: ${error}`));
  };

  const obtainUserByID = (id) => {
    getUserByID(id)
      .then((response) => {
        if (response.data.data && response.status === 200) {
          console.log(JSON.stringify(response.data.data));
          alert(
            `The name is: ${response.data.data.first_name} ${response.data.data.last_name}`
          );
        } else {
          throw new Error("Error to create a new user");
        }
      })
      .catch((error) => alert(`Error to get user by ID: ${error}`));
  };

  // CREATE Users

  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((response) => {
        if (response.data && response.status === 201) {
          alert(JSON.stringify(`User created: ${response.data}`));
        } else {
          throw new Error("Error to create a new user");
        }
      })
      .catch((error) => alert(`Error creating new user: ${error}`));
  };

  // UPDATE User

  const updateUserByID = (id, name, job) => {
    updateUser(id, name, job)
      .then((response) => {
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data)); 
        } else {
          throw new Error("User not found & no update done");
        }
      })
      .catch((error) => alert(`Error to get user by ID: ${error}`));
  };

  // DELETE User

  const deleteUserByID = (id) => {
    deleteUser(id)
      .then((response) => {
        if (response.status === 204) {
          alert(`User with ID ${id} delete successfully`)
        } else {
          throw new Error("User not found & no update done");
        }
      })
      .catch((error) => alert(`Error to get user by ID: ${error}`));
  };

  return (
    <div>
      <h3>Axios CRUD Example</h3>
      <button onClick={authUser}>Login</button>
      <button onClick={obtainAllUsers}>Obtain All users</button>
      <button onClick={() => obtainAllPagedUsers(2)}>Obtain page users</button>
      <button onClick={() => obtainUserByID(5)}>Obtain user by ID</button>
      <button onClick={() => createNewUser("morpheus", "leader")}>
        Create new user
      </button>
      <button onClick={() => updateUserByID(1, "morpheus", "zion resident")}>
        Update user
      </button>
      <button onClick={() => deleteUserByID(2)}>
        Delete user
      </button>
    </div>
  );
};

export default AxiosCRUDExample;
