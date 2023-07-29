import React, { useState, useEffect } from "react";
import {
  getAllPagedUsers,
  getAllUsers,
  getUserDetails,
  login
} from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(12);
  const [selectedUser, setSelectedUser] = useState({});
  const [page, setPage] = useState(2);
  const [usersPerPage, setUsersPerPage] = useState(6);

  useEffect(() => {
    // getData();
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUsers()
      .then((response) => {
        console.log("All users: ", response.data);
        setUsers(response.data);
        setPage(response.total_pages);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page);
      })
      .catch((error) => alert(`Error retreiving users => ${error}`))
      .finally(() => {
        console.log("Users obtained");
        console.table(users);
      });
  };

  const obtainPagedUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        console.log("All Paged Users: ", response.data);
        setUsers(response.data);
        setPage(response.total_pages);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page);
      })
      .catch((error) => alert(`Error retreiving users => ${error}`))
      .finally(() => {
        console.log("Users obtained");
        console.table(users);
      });
  };

  const obtainUserDetails = (id) => {
    getUserDetails(id)
      .then((response) => {
        console.log("All Paged Users: ", response.data);
        setSelectedUser(response.data);
      })
      .catch((error) => alert(`Error retreiving users => ${error}`))
      .finally(() => {
        console.log("Users obtained");
        console.table(selectedUser);
      });
  };

  const authUser = () => {
    login("eve.holt@reqres.in", "cityslicka")
    .then((response) => {
      console.log("Token: ", response.token);
      sessionStorage.setItem('token', response.token)
    })
    .catch((error) => alert(`Error login user => ${error}`))
    .finally(() => {
      console.log("Login successful"); 
    });
  }

  // const getData = async() => {
  //     const url = 'https://reqres.in/api/users';
  //     try{
  //         const response = await fetch(url);
  //         const res = await response.json();
  //         const data =  res.data;
  //         console.log(data);
  //         setUsers(data)
  //     } catch{
  //         (error) => alert(`Error retreiving users => ${error}`)
  //     }
  // }

  return (
    <div>
      <button onClick={authUser}>Auth User</button>
      <h1>Fetch Example</h1>
      {users.map((user, index) => (
        <p key={index} onClick={() => obtainUserDetails(user.id)} style={{cursor: "pointer"}}>
          {user.id} - {user.first_name} {user.last_name}
        </p>
      ))}
      <p>
        Showing {usersPerPage} users of {totalUsers} in total
      </p>
      <button onClick={() => obtainPagedUsers(1)}> 1 </button>
      <button onClick={() => obtainPagedUsers(2)}> 2 </button>
      <div>
        {selectedUser != null ? 
        (
          <div>
            <h3>User Details</h3>
            <p>Name: {selectedUser.first_name}</p>
            <p>Lastname: {selectedUser.last_name}</p>
            <p>Email: {selectedUser.email}</p>
            <img alt="Avatar" src={selectedUser.avatar} />
          </div>
        ) : (
          <p>No user selected</p>
        )}
      </div>
    </div>
  );
};

export default FetchExample;
