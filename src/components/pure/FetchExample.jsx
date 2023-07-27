import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // getData();
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUsers()
      .then((response) => {
        console.log("All users: ", response.data);
        setUsers(response.data);
      })
      .catch((error) => alert(`Error retreiving users => ${error}`))
      .finally(() => {
        console.log("Users obtained");
        console.table(users);
      });
  };

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
        <>
          <ul>
            <li key={user.id}>
              {user.id} - {user.first_name} {user.last_name}
            </li>
          </ul>
        </>
      ))}
    </div>
  );
};

export default FetchExample;
