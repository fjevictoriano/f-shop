import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import FormError from "../../common/FormError";
import firebase from "../../Firebase";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const login = ({ email, password }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push("/"))
      .catch(e => {
        setErrorMessage(e.message);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let loginDetails = {
      email: email,
      password: password
    };
    login(loginDetails);
  };
  return (
    <div className="w-full px-2 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="login-details">
          <p>
            <Link
              className="no-underline hover:text-green-light"
              to="/register"
            >
              Create a new account.
            </Link>
          </p>
          <div>
            <div className="section-title">
              <h3>Accede a tu cuenta</h3>
            </div>
            {errorMessage ? <FormError message={errorMessage} /> : null}
            <div>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div>
            <button className="btn-green">Enter</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default withRouter(Login);
