import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <span
          className="badge badge-pill badge-info m-2"
          style={{ width: 50, fontSize: "24px" }}
        >
          {totalCounters}
        </span>
        Items
      </div>
    </nav>
  );
};

export default NavBar;
