import React, {useState, useEffect} from "react";
import firebase from "../Firebase";

import AddProductForm from "../components/AddProductForm";
import Login from "../components/Login";
import Header from "../components/Header";
import {Route} from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import Register from "../components/Register";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const [products, setProducts] = useState([]);

	useEffect(
		() => {
			firebase.auth().onAuthStateChanged(FBUser => {
				if (FBUser) {
					setCurrentUser({
						user: FBUser,
						displayName: FBUser.displayName,
						userID: FBUser.uid,
						isAuthenticated: true
					});
				} else {
					setCurrentUser(null);
				}
			});
			loadProductList();
		},
		console.error,
		[]
	);

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

	return (
		<div className="flex flex-wrap">
			<Header />
			<SearchBar />
			<Route exact path="/login" render={() => <Login />} />
			<Route exact path="/register" render={() => <Register />} />
			<Route exact path="/product/new" render={() => <AddProductForm />} />
			<Route exact path="/account" render={() => <Profile />} />
			<Route
				exact
				path="/product/view/:productID"
				render={() => <Profile />}
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

export default App;
