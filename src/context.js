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
    detailProduct: detailProduct
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
  handleDetail = () => {
    console.log('hello from detail');
  };
  addToCart = () => {
    console.log('hello from add to cart');
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