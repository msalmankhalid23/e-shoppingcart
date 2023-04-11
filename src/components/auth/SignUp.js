import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

export default class SignUp extends Component {

    state = {
        name: "",
        email: "",
        confirmEmail: "",
        password: ""
    }

    handleChange = (event) => {
        debugger;
        const {id, value} = event.target;
        this.setState({
            [id]: value
        })
    }
    handleSubmit =(event) => {
    }

    handleSignIn = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <MDBContainer className="center-block mt-4">
                <MDBRow>
                    <MDBCol md="8" className="px-5">
                        <form onSubmit={this.handleSubmit}>
                            <div className="grey-text">
                                <MDBInput
                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    id="name"
                                    value ={this.name}
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    id="email"
                                    value ={this.email}
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    label="Confirm your email"
                                    icon="exclamation-triangle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    id="confirmEmail"
                                    value ={this.confirmEmail}
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    id="password"
                                    value ={this.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary">Register</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}





