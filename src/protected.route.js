import React from 'react'
import { Route } from 'react-router-dom'
import { SessionConsumer } from './components/auth/Session'
// import SignIn from './components/auth/SignIn'
export const ProtectedRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <SessionConsumer>
            {
                context => (
                    <Route
                        {...rest}
                        render={
                            props => {
                                    return <Component {...props} />
                                
                            }
                        }
                    />
                )
            }
        </SessionConsumer>
    );
};

/*
<Route
                  {...rest}
                  render={
                      props => {
                          if (context.data.isUserLoggedIn) {
                              return <Component {...props} />
                          }
                          else {
                              return <Redirect to={
                                  {
                                      pathname: "/",
                                      state: {
                                          from: props.location
                                      }
                                  }
                              } />
                          }
                      }
                  }
              />
*/