import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.png";

const Header = props => (
	<div className="w-full mb-4">
		<header>
			<div
				className="flex
								font-bold  
								bg-green-light 
								shadow-lg p-4">
				<div className="w-3/4" />
				<div
					className="w-1/4 
							font-sans
							text-white
							mx-4">
					<p>
						<Link className="no-underline text-text-white" to="/login">
							Login
						</Link>
						/
						<Link className="no-underline text-text-white" to="/register">
							register
						</Link>
					</p>
				</div>
			</div>
			<div className="flex bg-grey-lightest h-24">
				<div className="w-2/3 p-8">
					<Link to="/">
						<img className="w-32 " src={logo} alt="company name" />
					</Link>
				</div>
				<div className="w-1/3" />
			</div>
		</header>
	</div>
);

export default Header;
