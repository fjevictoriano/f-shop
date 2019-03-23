import React, {Component} from "react";
import FormError from "../../common/FormError";
import firebase from "../Firebase";
import {FaEdit} from "react-icons/fa";

import ProducList from "./ProductList";

class Account extends Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		address: "",
		city: "",
		country: "",
		zipCode: "",
		tel: "",
		errorMessage: "",
		isDisabled: true,
		productList: []
	};

	componentDidMount() {
		this.loadUserDetail();
		this.loadUserProducts();
	}

	loadUserDetail() {
		const userRef = firebase.database().ref(`/users/${this.props.userID}`);
		userRef.on("value", snapshoot => {
			let user = snapshoot.val();
			this.setState({
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				address: user.address,
				city: user.city,
				country: user.country,
				zipCode: user.zipCode,
				tel: user.tel
			});
		});
	}

	loadUserProducts() {
		const userRef = firebase.database().ref("/products");
		userRef
			.orderByChild("userID")
			.equalTo(this.props.userID)
			.on("value", snapshot => {
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
				this.setState({productList: productList});
			});
	}

	handleChange = e => {
		const itemName = e.target.name;
		const itemValue = e.target.value;
		this.setState({user: {[itemName]: itemValue}});
	};

	editFields = () => {
		if (this.state.isDisabled) this.setState({isDisabled: false});
		else this.setState({isDisabled: true});
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	render() {
		const {
			firstName,
			lastName,
			email,
			address,
			city,
			country,
			zipCode,
			tel,
			errorMessage,
			isDisabled,
			productList
		} = this.state;

		return (
			<div className="section">
				<div className="container">
					<div className="row">
						<form className="clearfix" onSubmit={this.handleSubmit}>
							<div className="col-md-6">
								<div className="card">
									<div className="card-body">
										<div className="register-details">
											<div className="section-title">
												<h3 className="title">Account Details</h3>
											</div>

											{errorMessage ? (
												<FormError message={errorMessage} />
											) : null}

											<div className="form-group">
												<input
													className="input"
													type="text"
													name="firstName"
													placeholder="First Name"
													value={firstName}
													onChange={this.handleChange}
													required
													disabled={isDisabled}
												/>
											</div>
											<div className="form-group">
												<input
													className="input"
													type="text"
													name="lastName"
													placeholder="Last Name"
													value={lastName}
													onChange={this.handleChange}
													required
													disabled={isDisabled}
												/>
											</div>
											<div className="form-group">
												<input
													className="input"
													type="email"
													name="email"
													placeholder="Email"
													value={email}
													onChange={this.handleChange}
													required
													disabled={isDisabled}
												/>
											</div>
											<div className="form-group">
												<input
													className="input"
													type="text"
													name="address"
													placeholder="Address"
													value={address}
													onChange={this.handleChange}
													disabled={isDisabled}
												/>
											</div>
											<div className="form-group">
												<input
													className="input"
													type="text"
													name="city"
													placeholder="City"
													value={city}
													onChange={this.handleChange}
													required
													disabled={isDisabled}
												/>
											</div>
											<div className="form-group">
												<input
													className="input"
													type="text"
													name="country"
													placeholder="Country"
													value={country}
													onChange={this.handleChange}
													required
													disabled={isDisabled}
												/>
											</div>
											<div className="form-group">
												<input
													className="input"
													type="text"
													name="zipCode"
													placeholder="ZIP Code"
													value={zipCode}
													onChange={this.handleChange}
													disabled={isDisabled}
												/>
											</div>
											<div className="form-group">
												<input
													className="input"
													type="tel"
													name="tel"
													placeholder="Telephone"
													value={tel}
													onChange={this.handleChange}
													required
													disabled={isDisabled}
												/>
											</div>
											<div className="pull-left">
												{isDisabled ? (
													<button className="btn primary-btn disabled">
														Update
													</button>
												) : (
													<button className="btn primary-btn">
														Update
													</button>
												)}
											</div>
											<div className="pull-right">
												<span
													title="Edit fields"
													style={{cursor: "pointer"}}
													onClick={this.editFields}
													className="main-btn icon-btn">
													<FaEdit />
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<ProducList productList={productList} />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Account;
