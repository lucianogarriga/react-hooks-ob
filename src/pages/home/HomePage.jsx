import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("We are in Route: ", location.pathname);

  const goTo = (path) => {
    navigate(path);
  };
  const goBack = () => {
    navigate(-1);
  };
  const goFordward = () => {
    navigate(+1);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <button onClick={() => goTo('/')}>Go To</button>
        <button onClick={goBack}>Go Back</button>
        <button onClick={goFordward}>Go Fordward</button>
      </div>
    </div>
  );
};

export default HomePage;
