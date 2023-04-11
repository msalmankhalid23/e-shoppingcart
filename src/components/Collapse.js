import React, { Component } from "react";
import { MDBCollapse } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

class CollapsePage extends Component {
    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () => {
        console.log("This is decrement method");
        debugger;
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

    decrement = () => {
        console.log("This is decrement method");
    }

    render() {
        const {info} = this.props;
        return (
            <>
            <ButtonWrapper onClick={this.toggleCollapse("basicCollapse")}>
                <FontAwesomeIcon icon={this.state.collapseID?faAngleDoubleDown:faAngleDoubleRight} />
            </ButtonWrapper>
                { /*<MDBBtn
                    
                    onClick={this.toggleCollapse("basicCollapse")}
                    style={{ marginBottom: "1rem" , backgroundColor:"red !important" }}
                >
                    Detail
                </MDBBtn>*/}
                <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                    <p>
                        {info}
                     </p>
                </MDBCollapse>
            </>
        );
    }
}


const ButtonWrapper = styled.button`
    
    background: transparent;
    border: 0;
    border-color:"var(--lightBlue)";
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    &:hover{
        background:"var(--lightBlue)";
        color: var(--mainBlue);
    }
    &:focus{
        outline: none;
    }
`

export default CollapsePage;