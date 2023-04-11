import React from 'react'
import Cookies from "js-cookie";

const getSessionCookie = () => {
  const sessionCookie = Cookies.get("session");
  if (sessionCookie === undefined) {
    return {};
  } else {
    return JSON.parse(sessionCookie);
  }
};

const getUserLoggedInStatus = () => {
  const userCookie = getSessionCookie();
  if (userCookie && userCookie.email) {
    return true;
  }
  return false;
}

export const setSessionCookie = (session) => {
  Cookies.remove("session");
  Cookies.set("session", JSON.stringify(session), { expires: 14 });
};

const SessionContext = React.createContext(getUserLoggedInStatus());

const SessionProvider = props => {
  
  return (
    <SessionContext.Provider value={
      {
        getUserLoggedInStatus,
        setSessionCookie
      }
    }
    >
      {props.children}
    </SessionContext.Provider>
  )
}

const SessionConsumer = SessionContext.Consumer;
export { SessionProvider, SessionConsumer };
