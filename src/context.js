import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext();
//two components in create context
//1-Provider
//2-Consumer

class ProductProvider extends Component {
    state = {
        /*products: storeProducts, //this will assign data as reference so we need to chagne thie approahc: please see approach with comment BETTER_APPROACH*/
        products: [], //BETTER_APPROACH
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    }
    //BETTER_APPROACH
    componentDidMount() {
        console.log("componentDidMount");
        this.setProducts();
    }
    //BETTER_APPROACH
    setProducts = () => {
        let tempProdcuts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item }//copying the values
            tempProdcuts = [...tempProdcuts, singleItem]
        })

        this.setState(() => {
            return { products: tempProdcuts } // is equal to {prodcuts:prodcuts}
        })
    }

    //Utility method that get the item according to id
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        console.log("Hello from detail")
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })

    }
    addToCart = id => { //it is similar to this addToCart = (id) =>{ ........
        console.log(`Hell from add to cart, id is ${id}`) //to print value change double quotes to this ``;

        let tempProduct = [...this.state.products]; //Assigning array to temp array so that actual adta don't get mutate, ... is the Spread Operator
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        //After updating the values, Update the state, so that it can refelct in other pages e.g in Product and Detail pages
        this.setState(() => {
            return { products: tempProduct, cart: [...this.state.cart, product] }
        },
            () => {
                console.log("add to cart" + this.state);
                this.addTotals();
            }
        )
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }

    increment = (id) => {
        console.log("This is increment method");
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        selectedProduct.count += 1;
        selectedProduct.total = selectedProduct.count * selectedProduct.price;


        this.setState(() => {
            return { cart: [...tempCart] }
        }, () => {
            this.addTotals();
        })

    }

    decrement = (id) => {
        console.log("This is decrement method");
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        if (selectedProduct.count > 1) {
            selectedProduct.count -= 1;
            selectedProduct.total = selectedProduct.count * selectedProduct.price;
        }

        this.setState(() => {
            return { cart: [...tempCart] }
        }, () => {
            this.addTotals();
        })

    }

    removeItem = (id) => {
        console.log("item removed");
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProdcut = tempProducts[index];
        removedProdcut.inCart = false;
        removedProdcut.count = 0;
        removedProdcut.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                prodcuts: [...tempProducts]
            }
        }, () => {
            this.addTotals();
        });
    }

    clearCart = () => {
        console.log("cart was cleared");
        this.setState(() => {
            return {
                cart: []
            }
        }, () => {
            this.setProducts(); //in this call back function after setting state: assing new list of products
            this.addTotals();
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    //in JS when assigning an object to variable, it is passed as by reference
    tester = () => {
        console.log('state prodcuts:', this.state.products[0].inCart);
        console.log('state prodcuts:', storeProducts[0].inCart);
        const tempProducts = [...this.state.products];
        tempProducts[0].inCart = true;
        this.setState(() => {
            return { prodcuts: tempProducts }
        }, () => {

            console.log('state prodcuts:', this.state.products[0].inCart);
            console.log('state prodcuts:', storeProducts[0].inCart);
        })

        //Output of above is
        /*
        state prodcuts: false
        state prodcuts: false
        state prodcuts: true
        state prodcuts: true
        */
        //Object is assigned as reference, as we only change the value of object in state but it actulay changed the value of storeProducts as well
    }

    render() {
        return ( // value="Hello from context" this is the props send to all children i.e where consumer will consume it
            <ProductContext.Provider value={{
                ...this.state,//pass all data in state
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart

            }}>
                {/*<button onClick={this.tester}> Test me</button> //just to test tester Method*/}
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
