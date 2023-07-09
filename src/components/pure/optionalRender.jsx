import React, { useState } from "react";

// Login Logout buttons

const LoginButton = ({ loginAction }) => {
  return <button onClick={loginAction}>Login</button>;
};

const LogoutButton = ({ logoutAction }) => {
  return <button onClick={logoutAction}>Logout</button>;
};

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
      ? (optionalButton = <LogoutButton logoutAction={logoutAction} />)
      : (optionalButton = <LoginButton loginAction={loginAction} />);
  }
 
  // Unread msg
  let addMessages = ( ) => {
    setNMessages(nMessages + 1)
  }

  return (
      <div>
        {optionalButton}
        {nMessages > 0 && <p>You have {nMessages} new messages...</p>}
        {nMessages == 0 && <p>You don't have new messages...</p>}
        <button onClick={addMessages}>Add new messages</button>
      </div>
  )
};

export default OptionalRender;
