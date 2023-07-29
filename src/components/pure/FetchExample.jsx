import React, { useState, useEffect } from "react";
import { getAllPagedUsers, getAllUsers } from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(12);
  const [page, setPage] = useState(2);
  const [usersPerPage,setUsersPerPage] = useState(6)

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
        setUsersPerPage(response.per_page)
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
      setUsersPerPage(response.per_page)
    })
    .catch((error) => alert(`Error retreiving users => ${error}`))
    .finally(() => {
      console.log("Users obtained");
      console.table(users);
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
      <h1>Fetch Example</h1>  
          {users.map((user) => (
            <p key={user.id}>
              {user.id} - {user.first_name} {user.last_name}
            </p>
          ))}
          <p>Showing {usersPerPage} users of {totalUsers}</p> 
          <button onClick={() => obtainPagedUsers(1)}> 1 </button>
          <button onClick={() => obtainPagedUsers(2)}> 2 </button> 
    </div>
  );
};

export default FetchExample;
