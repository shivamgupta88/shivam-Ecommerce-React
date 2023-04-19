import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  const { loginWithRedirect, logout , isAuthenticated , user} = useAuth0();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Street Styles
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              {
                isAuthenticated && (
                    <i >Hello, {user.name}</i>
                )
              }
              {
                  isAuthenticated ?
(                  <NavLink className="btn btn-outline-dark" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out </NavLink>
)                :
(              <NavLink className="btn btn-outline-dark" onClick={() => loginWithRedirect()}>Login</NavLink>
)
              }
              {/* <NavLink to="/register" className="btn btn-outline-dark ms-2"><i className="fa fa-user-plus me-1"></i>Register</NavLink> */}
              <NavLink to="/cart" className="btn btn-outline-dark ms-2"><i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;