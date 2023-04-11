import React from "react";
//import { SessionProvider } from "./components/auth/Session";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {ProtectedRoute} from './protected.route'
//One usfull way of importin with relative path
//1- Create index file in Cart folder and export that Cart.js to default
//2- import Cart.js completely
//3- create package.json file in that folder and set cart.js as main[For this need to restart the server i.e npm start]
import Cart from './components/Cart'
// import SignIn from './components/auth/SignIn'
import Default from './components/Default'
// import Authorize from './components/auth/Authorize'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import SignUp from './components/auth/SignUp'

export default function Routes() {
    return (
            <BrowserRouter>
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/"  //use '/' to home page routing
                    component={ProductList} />
                    {
                    //Protect other components form viewing, user need to sign in
                    }
                    <ProtectedRoute path="/details" component={Details} />
                    <ProtectedRoute path="/cart" component={Cart} />
                    <ProtectedRoute path="/productList" component={ProductList} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="*" component={Default} />
                </Switch>
            </BrowserRouter>
    )
}