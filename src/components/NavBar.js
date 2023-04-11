import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {ButtonContainer} from '../components/styled/Button'
import styled from 'styled-components'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckSquare, faSpinner, faMugHot, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCoffee, faCheckSquare, faSpinner, faMugHot, faCartPlus);

export default class NavBar extends Component {
// https://myfreelogomaker.com/s/78008151
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/"> 
                    <img src="img/logo.png" alt="store" className="navbar-brand" width="100" height="100"  />
                    <label className="d-block small font-italic text-white"> Developed By Salman Khalid</label>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link font-weight-bold">
                           C4Mania
                        </Link>
                        <p className="sub-text">Zeal for Gaming</p>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <FontAwesomeIcon icon="cart-plus" />
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainDark);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem; //not using px because its aboulute. rem set the value to root. e.g if user chagne the font from 16 to 20 then with rem it automatically will be set
    text-transform: capitalize ;
    font-family: 'Lekton', sans-serif;
}
.sub-text{
    color:var(--mainWhite) !important;
    font-style:italic;
    font-size: 0.5 rem;
    font-family: 'Lekton', sans-serif;
}

`