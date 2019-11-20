import React, { Component } from 'react';

// Create Context object
const ProductContext = React.createContext();
/* Provider component (of the Context). 
Provider provides all the information for the our whole application. We can get it wherever in our app (using Consumer). */ 


/* Consumer component (of the Context).
Whenever we would use the information (that comes from the Provider), we're gonna use the Consumer. */ 

class ProductProvider extends Component {
  render () {
    return (
      <ProductContext.Provider value="hello from context">
        {this.props.children}
      </ProductContext.Provider>
    );
  };
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };