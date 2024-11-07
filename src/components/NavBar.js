import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({ totalCounters }) => {
  return (
    
      <div>
          <button className="btn btn-dark">{totalCounters}</button>
      </div>
  );
};

export default NavBar;
