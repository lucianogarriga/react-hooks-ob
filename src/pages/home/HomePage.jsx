import React from "react";
import {useNavigate } from "react-router-dom";
import AxiosCRUDExample from "../../components/pure/AxiosCRUDExample";

const HomePage = () => { 
  const navigate = useNavigate(); 

  const goTo = (path) => {
    navigate(path);
  };

  const navigateProps = (path, online) => {
    navigate(`${path}/${online}`, {
      state: {
        online: online === 'true'
      },
      search: `?online=${online}`
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {/* <button onClick={() => navigateProps('/online-state', 'true')}>Go To Page with State / Query Params</button>  */}
        <button onClick={() => goTo('/profile')}>Go To Profile</button> 
        <AxiosCRUDExample/>
      </div>
    </div>
  );
};

export default HomePage;
