import React, { useState, useEffect, useContext } from "react";
import FormError from "../../common/FormError";
import firebase, { firestore } from "../../Firebase";
import { FaEdit } from "react-icons/fa";

import ProducList from "./PrductList";
import { UserContext } from "../../providers/UserProvider";
import { collectIdAndDocs } from "../../common/utilities";

const Account = () => {
  const { userID } = useContext(UserContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    tel: ""
  });
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setInput({ ...input, [inputName]: inputValue });
  };

  useEffect(
    () => {
      loadUserDetail();
      loadUserProducts();
    },
    console.error,
    [userID]
  );

  const loadUserDetail = async () => {
    let usersRef = firestore.collection("users");
    let userRef = usersRef.where("id", "==", userID);
    let snapshot = await userRef.get();
    let user = snapshot.docs.map(collectIdAndDocs)[0];
    setInput(user);
  };

  const loadUserProducts = () => {
    const productsRef = firebase.database().ref("/products");
    productsRef
      .orderByChild("userID")
      .equalTo(userID)
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
        setProducts(productList);
      });
  };

  const editFields = () => {
    setIsDisabled(!isDisabled);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-wrap">
      <form className="flex flex-wrap w-auto p-4" onSubmit={handleSubmit}>
        <div className="section-title">
          <h3 className="title">Account Details</h3>
        </div>

        {errorMessage ? <FormError message={errorMessage} /> : null}

        <div className="w-full">
          <input
            className="input"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={input.firstName}
            onChange={handleChange}
            required
            disabled={isDisabled}
          />
        </div>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={input.lastName}
            onChange={handleChange}
            required
            disabled={isDisabled}
          />
        </div>
        <div className="w-full">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            value={input.email}
            onChange={handleChange}
            required
            disabled={isDisabled}
          />
        </div>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="address"
            placeholder="Address"
            value={input.address}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="city"
            placeholder="City"
            value={input.city}
            onChange={handleChange}
            required
            disabled={isDisabled}
          />
        </div>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="country"
            placeholder="Country"
            value={input.country}
            onChange={handleChange}
            required
            disabled={isDisabled}
          />
        </div>
        <div className="w-full">
          <input
            className="input"
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            value={input.zipCode}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="w-full">
          <input
            className="input"
            type="tel"
            name="tel"
            placeholder="Telephone"
            value={input.tel}
            onChange={handleChange}
            required
            disabled={isDisabled}
          />
        </div>
        <div className="w-full flex mb-4">
          <div className="w-1/5">
            {isDisabled ? (
              <button className="btn-green disabled">Update</button>
            ) : (
              <button className="btn-green">Update</button>
            )}
          </div>
          <div className="w-3/5" />

          <div className="w-1/5">
            <span
              title="Edit fields"
              style={{ cursor: "pointer" }}
              onClick={editFields}
            >
              <FaEdit />
            </span>
          </div>
        </div>
      </form>
      <div className="w-auto p-4">
        <div className="section-title">
          <h3 className="title">Products</h3>
        </div>

        <ProducList products={products} />
      </div>
    </div>
  );
};

export default Account;
