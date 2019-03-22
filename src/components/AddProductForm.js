import React, {useState} from "react";
import useDropdown from "../components/hooks/useDropdown";

const AddProductForm = () => {
	const [user, setUser] = useState({
		imageFile: "",
		title: "",
		category: "category",
		location: "",
		currency: "usd",
		price: "",
		content: "",
		condition: ""
	});

	const handleChange = e => {
		const itemName = e.target.name;
		const itemValue = e.target.value;
		setUser({[itemName]: itemValue});
	};

	const handleSubmit = e => {
		e.preventDefault();
		// const { uploadImage, addProduct } = this.props;

		// const ImageFile = this.imageFile.files[0];
		// uploadImage(ImageFile)
		//     .then(snapshot => snapshot.ref.getDownloadURL())
		//     .then(url => {
		//         let productInfo = this._getProductInfo();
		//         productInfo.downloadURL = url;
		//         addProduct(productInfo);
		//     })

		//     .catch(console.error);
	};

	const getProductInfo = () => {
		return {
			title: user.title,
			category: user.category,
			location: user.location,
			currency: user.currency,
			price: user.price,
			content: user.content,
			condition: user.condition
		};
	};

	const [category, CategoryDropDown] = useDropdown("", "df", [
		"Cellphones",
		"Home",
		"Vehicules",
		"Services"
	]);

	return (
		<div className="product-details">
			<div className="section-title text-center my-6">
				<h3 className="title">Product Details</h3>
			</div>
			<div>
				<div>
					<label htmlFor={"image"}>Choose a product picture:</label>
					<input
						className="file "
						type="file"
						id="image"
						name="image"
						placeholder="Image"
						accept="image/*"
						// ref={ref => (user.imageFile = ref)}
						multiple
					/>
				</div>
				<div>
					<div>
						<input
							className="input"
							type="text"
							name="title"
							placeholder="Product title"
							value={user.title}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div>
					<CategoryDropDown />
				</div>
				<div>
					<input
						className="input"
						type="text"
						name="location"
						placeholder="Location"
						value={user.location}
						onChange={handleChange}
					/>
				</div>
				<div className="flex">
					<div className="w-2/4 ">
						<select
							className="input"
							value={user.value}
							onChange={handleChange}
							name="currency">
							<option value="usd">USD($)</option>
							<option value="eur">EUR(€)</option>
							<option value="eur">DOP($)</option>
						</select>
					</div>

					<div className="w-2/4 ">
						<input
							className="input"
							type="number"
							value={user.price}
							onChange={handleChange}
							name="price"
							placeholder="Price"
						/>
					</div>
				</div>
				<div>
					<textarea
						rows={8}
						className="input"
						name="content"
						placeholder="Content"
						value={user.content}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div>
				<button className="btn-green p-2 mx-4">Publish</button>
			</div>
			<div />
		</div>
	);
};
export default AddProductForm;
