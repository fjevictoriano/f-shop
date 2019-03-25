import React from "react";
import {Link} from "react-router-dom";
import {FaTrash} from "react-icons/fa";
const Product = props => (
	<tr>
		<td className="thumb">
			<img src={props.imageURL} alt="" />
		</td>
		<td className="details">
			<Link to="/account">{props.title}</Link>
			<ul>
				<li>
					<span>Lorem ipsum dolor, sit amet consectetur</span>
				</li>
				<li>
					<span>Lorem ipsum dolor, sit amet consectetur</span>
					<div>
						<div className="text-right mx-4">
							<span
								title="Edit fields"
								style={{cursor: "pointer"}}
								onClick={() => {}}
								className="main-btn icon-btn">
								<FaTrash />
							</span>
						</div>
					</div>
				</li>
			</ul>
		</td>
	</tr>
);

export default Product;
