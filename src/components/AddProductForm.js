import React, { useState, useRef, useContext } from "react";
import useDropdown from "../components/hooks/useDropdown";
import { withRouter } from "react-router-dom";
import firebase, { firestore } from "../Firebase";
import { UserContext } from "../providers/UserProvider";

const AddProductForm = ({ history }) => {
  const { userID } = useContext(UserContext);
  const inputImage = useRef(null);
  const [input, setInput] = useState({
    imageFile: "",
    title: "",
    category: "category",
    location: "",
    currency: "usd",
    price: "",
    content: "",
    condition: ""
  });

  const addProduct = async productInfo => {
    await firestore.collection("products").add(productInfo);
    history.push("/");
  };

  const uploadImage = imageFile => {
    const ref = firebase.storage().ref(`users/${userID}/images/product`);
    const name = +new Date() + "-" + imageFile.name;
    const metadata = {
      contentType: imageFile.type
    };
    const task = ref.child(name).put(imageFile, metadata);
    return task;
  };

  const handleChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setInput({ ...input, [inputName]: inputValue });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const ImageFile = inputImage.current.files[0];
    uploadImage(ImageFile)
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        let productInfo = getProductInfo();
        productInfo.imageURL = url;
        addProduct(productInfo);
      })

      .catch(console.error);
  };

  const getProductInfo = () => {
    return {
      userID: userID,
      title: input.title,
      category: input.category,
      location: input.location,
      currency: input.currency,
      price: input.price,
      content: input.content,
      condition: input.condition
    };
  };

  const [category, CategoryDropDown] = useDropdown("", "df", [
    "Cellphones",
    "Home",
    "Vehicules",
    "Services"
  ]);

  return (
    <form onSubmit={handleSubmit}>
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
              ref={inputImage}
              multiple
              required
            />
          </div>
          <div>
            <div>
              <input
                className="input"
                type="text"
                name="title"
                placeholder="Product title"
                value={input.title}
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
              value={input.location}
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <div className="w-2/4 ">
              <select
                className="input"
                value={input.value}
                onChange={handleChange}
                name="currency"
              >
                <option value="usd">USD($)</option>
                <option value="eur">EUR(€)</option>
                <option value="eur">DOP($)</option>
              </select>
            </div>

            <div className="w-2/4 ">
              <input
                className="input"
                type="number"
                value={input.price}
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
              value={input.content}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button className="btn-green p-2 mx-4">Publish</button>
        </div>
        <div />
      </div>
    </form>
  );
};
export default withRouter(AddProductForm);
