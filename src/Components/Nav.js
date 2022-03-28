import React from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
    swal("Security", "You have logged out", "success");
  };

  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>
        <li></li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          {auth ? (
            <Link to="/signup" onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link to="/signup">Signup</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
