import React, { Component, createContext } from "react";
import { collectIdAndDocs } from "../utilities";
import { firestore } from "../Firebase";

export const ProductsContext = createContext();

class ProductsProvider extends Component {
  state = { products: [] };
  unsubscribeFromFirestore = null;

  componentDidMount() {
    this.unsubscribeFromFirestore = firestore
      .collection("products")
      .onSnapshot(snapshot => {
        const products = snapshot.docs.map(collectIdAndDocs);
        this.setState({ products });
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromFirestore();
  }

  render() {
    const { products } = this.state;
    const { children } = this.props;

    return (
      <ProductsContext.Provider value={products}>
        {children}
      </ProductsContext.Provider>
    );
  }
}

export default ProductsProvider;
