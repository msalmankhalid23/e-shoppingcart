import React, { Component } from 'react'

import { SessionConsumer } from "./Session";

export default class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let sessionCookie = {
            email: this.state.email
        }
        console.log(sessionCookie);
        //  setSessionCookie(sessionCookie);
        this.props.history.push("/productList");
    }

    handleSignUp = (event) => {
        event.preventDefault();
        this.props.history.push("/signup");
    }

    render() {
        return (
            <SessionConsumer>
                {
                    context => (
                        <React.Fragment>
                            < div className="d-flex justify-content-center mt-4">
                                <form onSubmit={(event) => {
                                    this.handleSubmit(event);
                                    let sessionCookie = {
                                        email: this.state.email
                                    }
                                    context.setSessionCookie(sessionCookie)
                                }}
                                    style={{ width: 600 }}>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            id="email"
                                            placeholder="Enter email address"
                                            value={this.email}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            value={this.password}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-primary"
                                        onSubmit={this.handleSubmit}
                                    >
                                        Submit
                                </button>
                                </form>
                            </div>
                            <div className="text-center">
                                <label> Don't have an account?</label>
                                <span className="btn-sign-up" onClick={this.handleSignUp}>Sign Up</span>
                            </div>
                        </React.Fragment>
                    )
                }
            </SessionConsumer >
        )
    }
}
