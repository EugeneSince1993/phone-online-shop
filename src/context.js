import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

// Create Context object
const ProductContext = React.createContext();
/* Provider component (of the Context). 
Provider provides all the information for the our whole application. We can get it wherever in our app (using Consumer). */ 


/* Consumer component (of the Context).
Whenever we would use the information (that comes from the Provider), we're gonna use the Consumer. */ 

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: []
  };
  componentDidMount() {
    this.setProducts();
  };
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = id => {
    /* "temporary products" array */
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return { 
        products: tempProducts,
        cart: [...this.state.cart, product]
      };
    }, () => {
      console.log(this.state);
    });
  };
  render () {
    return (
      <ProductContext.Provider 
        value={
          {
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart
          }
        }
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  };
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };