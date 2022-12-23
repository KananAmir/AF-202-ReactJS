import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div id="header">
      <Link to={"/"}>Logo</Link>

      <ul>
        <li>
          <NavLink to={"/customers-list"}>Customers List</NavLink>
        </li>
        <li>
          <NavLink to={"/add-customer"}>Add Customers</NavLink>
        </li>
        <li>
          <NavLink to={"/favorite-customers"}>Favorites Customers</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
