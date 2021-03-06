import React, { useState, useEffect } from "react";
import firebase from "../Firebase";
import { Route, withRouter } from "react-router-dom";

import AddProductForm from "../components/AddProductForm";
import Login from "../components/user/Login";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import ProductInfo from "../components/ProductInfo";
import Register from "../components/user/Register";
import Footer from "../components/Footer";
import Account from "../components/user/Account";

const App = ({ history }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false });
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      firebase.auth().onAuthStateChanged(FBUser => {
        if (FBUser) {
          setUserInfo({
            user: FBUser,
            userID: FBUser.uid,
            isAuthenticated: true
          });
        }
        setIsLoading(false);
      });
      loadProductList();
    },
    console.error,
    [userInfo.isAuthenticated]
  );

  const login = async loginInfo => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then(() => history.push("/"));
  };

  const logoutUser = e => {
    e.preventDefault();
    setUserInfo({
      user: null,
      UserID: null,
      isAuthenticated: false
    });
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      });
  };

  const loadProductList = () => {
    const productsRef = firebase.database().ref("/products");
    productsRef.on("value", snapshot => {
      let products = snapshot.val();
      let productList = [];
      for (let item in products) {
        productList.push({
          productID: item,
          imageURL: products[item].downloadURL,
          title: products[item].title,
          category: products[item].category,
          location: products[item].location,
          currency: products[item].currency,
          price: products[item].price,
          content: products[item].content,
          condition: products[item].condition
        });
      }
      setProducts(productList);
    });
  };

  const registerUser = registrationInfo => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({ displayName: registrationInfo.firstName }).then(
        () => {
          setUserInfo({
            user: FBUser,
            userID: FBUser.uid,
            isAuthenticated: true
          });
          registrationInfo.userID = FBUser.uid;
          pushRegistrationDetails(registrationInfo);
          history.push("/");
        }
      );
    });
  };

  const pushRegistrationDetails = registrationInfo => {
    const userRef = firebase.database().ref("/users");
    userRef.child(registrationInfo.userID).set(registrationInfo);
  };
  const addProduct = productInfo => {
    const productRef = firebase.database().ref("/products");
    productInfo.userID = userInfo.userID;
    productRef.push(productInfo, () => {
      history.push("/");
    });
  };

  const uploadImage = imageFile => {
    const ref = firebase
      .storage()
      .ref(`users/${userInfo.userID}/images/product`);
    const name = +new Date() + "-" + imageFile.name;
    const metadata = {
      contentType: imageFile.type
    };
    const task = ref.child(name).put(imageFile, metadata);
    return task;
  };

  const deleteProduct = productID => {
    const productRef = firebase
      .storage()
      .ref(`/products/${userInfo.userID}/${productID}`);
    productRef.delete();
  };

  if (isLoading) return <div>Still loading...</div>;
  return (
    <div className="flex flex-wrap">
      <Header
        isAuthenticated={userInfo.isAuthenticated}
        logoutUser={logoutUser}
      />
      <Route exact path="/" component={SearchBar} />
      <Route exact path="/login" render={() => <Login loginUser={login} />} />
      <Route
        exact
        path="/register"
        render={() => <Register registerUser={registerUser} />}
      />
      <Route
        exact
        path="/product/new"
        render={() => (
          <AddProductForm addProduct={addProduct} uploadImage={uploadImage} />
        )}
      />
      <Route
        exact
        path="/account"
        render={() => (
          <Account userID={userInfo.userID} deleteProduct={deleteProduct} />
        )}
      />
      <Route
        exact
        path="/product/view/:productID"
        render={() => <ProductInfo />}
      />
      <Route
        exact
        path="/"
        render={() => <ProductList products={products} />}
      />
      <Footer />
    </div>
  );
};

export default withRouter(App);
