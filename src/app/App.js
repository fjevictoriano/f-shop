import React, { useContext } from "react";
import { Route } from "react-router-dom";

import AddProductForm from "../components/AddProductForm";
import Login from "../components/user/Login";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import ProductInfo from "../components/ProductInfo";
import Register from "../components/user/Register";
import Footer from "../components/Footer";
import Account from "../components/user/Account";
import { UserContext } from "../providers/UserProvider";

const App = () => {
  const userInfo = useContext(UserContext);

  return (
    <div className="flex flex-wrap">
      <Header isAuthenticated={userInfo.isAuthenticated} />
      <Route exact path="/" component={SearchBar} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/register" render={() => <Register />} />
      <Route exact path="/product/new" render={() => <AddProductForm />} />
      <Route
        exact
        path="/account"
        render={() => <Account userID={userInfo.userID} />}
      />
      <Route
        exact
        path="/product/view/:productID"
        render={() => <ProductInfo />}
      />
      <Route exact path="/" render={() => <ProductList />} />
      <Footer />
    </div>
  );
};

export default App;
