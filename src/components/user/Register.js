import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../Firebase";
import FormError from "../../common/FormError";

const Register = ({ history }) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    tel: "",
    password: ""
  });

  const handleChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setInput({ ...input, [inputName]: inputValue });
  };

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(input.email, input.password)
      .then(() => {
        let regInfo = getRegistrationInfo();
        registerUser(regInfo);
      })
      .catch(e => {
        setErrorMessage(e.message);
      });
  };

  const registerUser = registrationInfo => {
    let unsubscribe = firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({ displayName: registrationInfo.firstName }).then(
        () => {
          registrationInfo.userID = FBUser.uid;
          pushRegistrationDetails(registrationInfo);
          history.push("/");
          unsubscribe();
        }
      );
    });
  };

  const pushRegistrationDetails = registrationInfo => {
    const userRef = firebase.database().ref("/users");
    userRef.child(registrationInfo.userID).set(registrationInfo);
  };

  const getRegistrationInfo = () => {
    return {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      address: input.address,
      city: input.city,
      country: input.country,
      zipCode: input.zipCode,
      tel: input.tel
    };
  };

  return (
    <form className="flex flex-wrap px-2" onSubmit={handleSubmit}>
      <p>
        Already a user ? <Link to="/login">Login</Link>
      </p>
      <div className="w-full section-title">
        <h3 className="title">Create Account</h3>
      </div>
      {errorMessage ? <FormError message={errorMessage} /> : null}
      <div className="w-full ">
        <input
          className="input"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={input.firstName}
          onChange={handleChange}
          required
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
        />
      </div>
      <div className="w-full">
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={handleChange}
          autoComplete="on"
          required
          pattern=".{8,}"
          title="8 characters minimum"
        />
      </div>
      <div>
        <button className="btn-green">Create</button>
      </div>
    </form>
  );
};

export default withRouter(Register);
