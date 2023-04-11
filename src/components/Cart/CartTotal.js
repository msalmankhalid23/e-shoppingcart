import React from 'react'
import { Link } from 'react-router-dom'

export default function CartTotal({ value }) {
    const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right"> 
                        <Link to="/">
                            <button type="button"
                                className="btn btn-outline-danger text-capitalize"
                                onClick={() => clearCart()}
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal: </span>
                            <strong>RS{cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Tax: </span>
                            <strong>RS{cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">total: </span>
                            <strong>RS{cartTotal}</strong>
                        </h5>

                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
