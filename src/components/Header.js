import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header className="mb-4 text-center p-3">
      <Link to={'/'}>
        <h1 className="text-center text-white">{props.titulo}</h1>
      </Link>
    </header>
  );
};

export default Header;
