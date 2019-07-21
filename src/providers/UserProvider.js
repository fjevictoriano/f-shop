import React, { Component, createContext } from "react";
import firebase from "../Firebase";

export const UserContext = createContext();

class UserProvider extends Component {
  state = {
    userInfo: {
      userID: localStorage.getItem("userID"),
      isAuthenticated: false
    }
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        this.setState({
          userInfo: {
            userID: FBUser.uid,
            isAuthenticated: true
          }
        });
        this.storeUserID();
      } else {
        this.setState({
          userInfo: {
            userID: null,
            isAuthenticated: false
          }
        });
      }
    });
  }

  storeUserID() {
    if (typeof this.userInfo == "undefined") {
      localStorage.setItem("userID", this.state.userInfo.userID);
    }
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { userInfo } = this.state;
    const { children } = this.props;

    return (
      <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    );
  }
}

export default UserProvider;
