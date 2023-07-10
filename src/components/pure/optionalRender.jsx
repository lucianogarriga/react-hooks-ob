import React, { useState } from "react";

// Login Logout buttons

function LoginButton({ loginAction, propStyle }) {
  return (
    <button onClick={loginAction} style={propStyle}>
      Login
    </button>
  );
}

function LogoutButton({ logoutAction, propStyle }) {
  return (
    <button onClick={logoutAction} style={propStyle}>
      Logout
    </button>
  );
}

// Estilos para los botones

const loggedStyle = {
  backgroundColor: "rgb(9,164,36)",
  color: "white",
  fontWeight: "bold",
  margin: "15px",
};

const unloggedStyle = {
  backgroundColor: "rgb(220,34,44)",
  color: "white",
  fontWeight: "bold",
  margin: "15px",
};

const OptionalRender = () => {
  const [access, setAccess] = useState(false);
  // Msg sin leer del usuario
  const [nMessages, setNMessages] = useState(0);

  const loginAction = () => {
    setAccess(true);
  };
  const logoutAction = () => {
    setAccess(false);
  };

  let optionalButton;
  // if (access) {
  //   optionalButton = <LogoutButton logoutAction={logoutAction} />;
  // } else {
  //   optionalButton = <LoginButton loginAction={loginAction} />;
  // }
  {
    access
      ? (optionalButton = (
          <LogoutButton logoutAction={logoutAction} propStyle={unloggedStyle} />
        ))
      : (optionalButton = (
          <LoginButton loginAction={loginAction} propStyle={loggedStyle} />
        ));
  }

  // Unread msg
  let addMessages = () => {
    setNMessages(nMessages + 1);
  };

  return (
    <div>
      {optionalButton}
      <br /> 

      {access 
      ? (
        <div>
          <h2>Welcome to your dashboard</h2>
            {nMessages > 0 
              ? <p> You have {nMessages} new message{nMessages > 1 ? "s" : null}...</p>
              : <p>You don't have new messages...</p>
            }
            {nMessages === 0 
              ? <button onClick={addMessages}>Add your first message</button>
              : <button onClick={addMessages}>Add new messages</button>
            }
        </div>
        ) 
      : null
      } 
    </div>
  );
};

export default OptionalRender;
