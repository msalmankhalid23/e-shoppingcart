import React from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../context'
import { ButtonContainer } from './styled/Button'
import { Link } from 'react-router-dom'

const Modal = () => {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        const { modalOpen, closeModal } = value; //These are methods and passed sepratelt in Product provider
                        const { img, title, price } = value.modalProduct; //ModalProduct is defined in state thats why its value.ModalProduct
                        
                        if (!modalOpen) {
                            return null;
                        }
                        return <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        item added to the cart
                                        <img src={img} className="img-fluid" alt="prodcut" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">prince: ${price}</h5>
                                        <Link to="/">
                                            <ButtonContainer onClick={()=>closeModal()}>
                                                Store
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={()=>closeModal()}>
                                                go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>

                                </div>

                            </div>

                        </ModalContainer>

                    }
                }
            </ProductConsumer>
        )
}
export default Modal;

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background: var(--mainWhite);
}

`