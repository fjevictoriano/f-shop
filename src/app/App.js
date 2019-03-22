import React from "react";
import AddProductForm from "../components/AddProductForm";
import Filter from "../components/Filter";
import DimWindow from "../components/DimWindow";
import Login from "../components/Login";
import Header from "../components/Header";
import {Route} from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import Register from "../components/Register";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

const App = () => {
	const cards = [1, 2, 3, 4, 4];

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
				render={() => <ProductList products={cards} />}
			/>
			<Footer />
		</div>
	);
};

export default App;
