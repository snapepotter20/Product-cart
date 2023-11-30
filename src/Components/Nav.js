import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const clearLocal = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <>
      {auth ? (
        <div className="nav">
           <img src="/Images/raybanlogo.png" alt="logo" className="logo"/>
          <Link to="/" className="link">
            Products
          </Link>
          <Link to="/add" className="link">
            Add Product
          </Link>
          {/* <Link to="/update" className="link">
            Update Product
          </Link> */}
          <Link to="/profile" className="link">
            Profile
          </Link>
          <Link to="/signup" className="link" onClick={clearLocal}>
            Logout
          </Link>
          <Link className="link" id="profile">
            {JSON.parse(auth).name}
          </Link>
        </div>
      ) : (
        <div className="nav-right">
          <Link to="/signup" className="link">
            SignUp
          </Link>
          <Link to="/login" className="link">
            Login
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
