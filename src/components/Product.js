import React, { Component } from 'react'
import CollapsePage from './Collapse'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

//to validate the data
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart, info } = this.props.product;
        return (
            <ProductWrapper className="col-9 max-auto col-md-4">
                <div className="card">
                    {/*How to use context api consumer here:
                    1- first identify which area to wrap around consumer so that props passed to that 
                    2- Place <ProductConsumer> around that
                    3- To access the props in consumer : here is the syntax. create arrow function and within that place all wraped area in that method.
                    By wraped area I mean: all the div etc
                    */}
                    <ProductConsumer>
                       
                        {(value) => (
                            <>
                                {
                                    //WrappedArea Start
                                }
                                <div className="img-container p-5"
                                    onClick={() => value.handleDetail(id)}
                                >
                                    <Link to="/details">
                                        <img src={img} alt="prodcut" className="card-img-top"
                                        />
                                    </Link>
                                    <button className="cart-btn"
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id)
                                            value.openModal(id)
                                        }}
                                    >

                                        {inCart ? <p className="text-capitalize mb-0" disabled>
                                            {" "}
                                            In Cart
                                    </p> : <FontAwesomeIcon icon="cart-plus" />
                                        }
                                    </button>
                                </div>
                                {
                                    //WrappedArea - End
                                }
                                {/*card footer*/}
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="align-self-center mb-0">{title}</p>
                                    <h5 className="text-blue font-italic mb-0">
                                        <span className="mar-1"> RS</span>
                                        {price}
                                    </h5>
                                </div>
                                <CollapsePage info={info} />
                            </>
                        )}

                    </ProductConsumer>


                    
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition: all 1s linear;
    margin-top: 1.9rem;
}
.card-footer{
    background:transparent;
    border-top: transaprent;
    transition: all 1s linear;
}
&:hover{
.card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
}
.card-footer{
    background:rgba(247,247,247);
}
}

.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
transform: scale(1.2);
}
.cart-btn{
    position: absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 1s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}

.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
`