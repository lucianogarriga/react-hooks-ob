import React, { useEffect, useState } from "react";
import { getRandomUsers } from "../../utils/axiosService";

const AxiosExample = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getRandomUsers()
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.results[0]);
          setUser(response.data.results[0]); 
        }
      })
      .catch((error) => console.log("Error occurred: ", error))
      .finally(() => console.log("Executed successfully"));
  };

  return (
    <div>
      <h2>Axios Example</h2>
      {user !== null 
      ? (
        <div>
        <img src={user.picture.large} alt="Picture"/>
          <h2> {user.name.title} {user.name.first} {user.name.last}</h2>
          <h3>{user.email}</h3>
        </div>
      ) : (
        null 
        )}
        <div> 
        <p>Generate new user</p>
          <button onClick={obtainUsers}>Obtain new user</button>
        </div> 
    </div>
  );
};

export default AxiosExample;
