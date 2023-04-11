
import React,{useEffect}  from 'react'
import Cookies from "js-cookie";

const SignOut = ({ history }) => {
    useEffect(
      () => {
        Cookies.remove("session");
        history.push("/login");
      },
      [history]
    );
  
    return <div>Logging out!</div>;
  };

  export default SignOut;