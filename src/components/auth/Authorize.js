import React,{useContext }  from 'react'
import { Link } from "react-router-dom";
import { SessionContext } from "./Session";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const Authorize = ({ history }) => {
    const session = useContext(SessionContext);
    if (session === undefined || session.email === undefined) {
      history.push("/signin");
    }
    else{
        history.push("/productList");
    }
    return(
        <div>
            Redirecting..
        </div>
    )
  };

  export default Authorize;