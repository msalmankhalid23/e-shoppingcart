
import React, { Component } from 'react'
import CarouselPage from './Carousel'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context'
import axios from 'axios';
export default class ProductList extends Component {
    componentDidMount(){
        var serviceUrl = 'https://localhost:44373/api/test';
        axios.get(serviceUrl).then((resp) => {
            console.log(resp);

        });
    }
    render() {
        return (
            <div>
                <CarouselPage/>
                <React.Fragment>
                    <div className="py-5">
                        <div className="container">

                            <Title name='Products:' title="Play Stations" />
                            <div className="row">
                                {/*here there is no prop: we can access value pass in provider by only creating arrow function */}
                                <ProductConsumer> 
                                    {
                                        //Need to create arrow function and parmeter (value) is the object passed in Provider: here we can keep different variable name: but for better understanding variable name is same: <ProductContext.Provider value={{.......
                                        (value) => {
                                            console.log('val'+value.products);
                                            return value.products.map(product => {
                                                return <Product
                                                    key={product.id} product={product}
                                                />
                                            })
                                        }
                                    }
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}