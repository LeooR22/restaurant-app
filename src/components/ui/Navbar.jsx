import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../auth/AuthContext";
// import { types } from "../../types/types";

export const Navbar = () => {
  //   const {
  //     user: { name },
  //     dispatch,
  //   } = useContext(AuthContext);
  //   const history = useHistory();

  //   const handleLogout = () => {
  //     history.replace("/login");

  //     dispatch({
  //       type: types.logout,
  //     });
  //   };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand ms-2" to="/">
        Restaurant
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/"
          >
            Menu
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">Leo HardCoded</span>

          <button className="nav-item nav-link btn">Logout</button>
        </ul>
      </div>
    </nav>
  );
};
