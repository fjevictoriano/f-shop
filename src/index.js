import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/tailwind.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./providers/ProductsProvider";
import UserProvider from "./providers/UserProvider";

ReactDOM.render(
  <UserProvider>
    <ProductsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsProvider>
  </UserProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
