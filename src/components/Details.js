import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './styled/Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        console.log(value.detailProduct);
                        const { id, img, company, title, info, price, inCart } = value.detailProduct;
                        return (
                            <div className="container py-5">
                                {/*title */}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                {/*end title */}
                                {/* product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        {/*two columns layout */}
                                        <img src={img} className="img-fluid" alt="product" />
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        {/*two columns layout */}
                                        <h2>Model;{title} </h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            made by: <span className="text-uppercase"> {company}</span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                price:<span>RS</span> {price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            some info about product:
                                        </p>
                                        <p className="text-muted lead">{info}</p>
                                        {/*Button */}
                                        <div>
                                            <Link to="/">
                                                <ButtonContainer>Back to products</ButtonContainer>
                                            </Link>
                                            {/*Props can be passed to sytled components: in case the prop "cart" is passed to ButtonContainer */}
                                            <ButtonContainer
                                                cart
                                                disabled={inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCart(id)
                                                    value.openModal(id)
                                                }}
                                            >
                                                {inCart ? 'in cart' : "add to cart"}
                                            </ButtonContainer>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}
