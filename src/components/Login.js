import React, {Component} from "react";
import {Link} from "react-router-dom";

class Login extends Component {
	state = {
		email: "",
		password: "",
		errorMessage: null
	};

	handleChange = e => {
		const itemName = e.target.name;
		const itemValue = e.target.value;
		this.setState({[itemName]: itemValue});
	};

	handleSubmit = e => {
		e.preventDefault();
		// let loginInfo = {
		// 	email: this.state.email,
		// 	password: this.state.password
		// };
		// this.props.login(loginInfo).catch(e => {
		// 	this.setState({errorMessage: e.message});
		// });
	};

	render() {
		const {errorMessage} = this.state;

		return (
			<div className="w-full px-2 mb-4">
				<form onSubmit={this.handleSubmit}>
					<div className="login-details">
						<p>
							<Link
								className="no-underline hover:text-green-light"
								to="/register">
								Create a new account.
							</Link>
						</p>
						<div>
							<div className="section-title">
								<h3 className="title">Accede a tu cuenta</h3>
							</div>
							{/* {errorMessage ? (
											<FormError message={errorMessage} />
										) : null} */}
							<div>
								<input
									className="input"
									type="email"
									name="email"
									placeholder="email"
									value={this.state.email}
									onChange={this.handleChange}
									required
								/>
							</div>
							<div>
								<input
									className="input"
									type="password"
									name="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.handleChange}
									required
								/>
							</div>
						</div>

						<div className="pull-left">
							<button className="btn-green">Enter</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
