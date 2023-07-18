import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("We are in Route: ", location.pathname);

  const goTo = (path) => {
    navigate(path);
  };

  const navigateProps = (path) => {
    navigate(path,{ 
      search: '?online=true', // Query Params
      state: {
        online: true
      }
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <button onClick={() => navigateProps('/online-state')}>Go To Page with State / Query Params</button> 
        <button onClick={() => goTo('/profile')}>Go To Profile</button> 
      </div>
    </div>
  );
};

export default HomePage;
