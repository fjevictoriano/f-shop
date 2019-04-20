/**@jsx jsx*/
import { css, jsx } from "@emotion/core";
import { Link, withRouter } from "react-router-dom";
import logo from "../images/logo.png";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import firebase from "../Firebase";

const Header = ({ isAuthenticated, history }) => {
  const logoutUser = e => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      });
  };
  return (
    <div className="w-full mb-4">
      <header>
        <div
          className="flex
								font-bold  
								bg-green-light 
								shadow-lg p-4"
        >
          <div className="w-3/4" />
          {isAuthenticated ? (
            <div className="w-1/4 text-white text-right">
              <div
                className="relative inline-block"
                css={css`
                  &:hover .dropdown-content {
                    display: block;
                  }
                `}
              >
                <FaUserCircle className=" text-4xl" />
                <div
                  className="dropdown-content bg-green-light"
                  css={css`
                    display: none;
                    position: absolute;
                    right: -14px;
                    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                    z-index: 1;
                  `}
                >
                  <Link className="no-underline p-2 block " to="/account">
                    Account
                  </Link>
                  <a
                    href="/"
                    onClick={logoutUser}
                    className="no-underline text-center p-2 block border-t-2"
                    to="/"
                  >
                    <FaSignOutAlt />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="w-1/4 
							font-sans
							text-white
							mx-4"
            >
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
          )}
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
};

export default withRouter(Header);
