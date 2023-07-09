import React, { useState } from "react";

// Login Logout buttons

  function LoginButton ({ loginAction, propStyle })  {
    return <button onClick={loginAction} style={propStyle}>Login</button>;
  };

  function LogoutButton ({ logoutAction, propStyle }) {
    return <button onClick={logoutAction} style={propStyle}>Logout</button>;
  };

  // Estilos para los botones

  const loggedStyle  =  {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    margin: "15px"
  }


  const unloggedStyle  = { 
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    margin: "15px"
  }


const OptionalRender = () => {

  const [access, setAccess] = useState(true);
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
      ? (optionalButton = <LogoutButton logoutAction={logoutAction} propStyle={unloggedStyle}/>)
      : (optionalButton = <LoginButton loginAction={loginAction} propStyle={loggedStyle}/>);
  }
 
  // Unread msg
  let addMessages = ( ) => {
    setNMessages(nMessages + 1)
  }

  return (
      <div>
        {optionalButton}
        <br/>
        {/* {nMessages > 0 && nMessages === 1 && <p>You have ONE new message!</p>}
        {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
        {nMessages === 0 && <p>You don't have new messages...</p>} */}
        <button onClick={addMessages}>
          {nMessages === 0 
          ? "Add your first message" 
          : "Add a new message"
          }
        </button>
        {/* Ternary Operator */}
        {nMessages > 0
          ? <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p>
          : <p>You don't have new messages...</p>
        }
      </div>
  )
};

export default OptionalRender;
