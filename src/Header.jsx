import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="container">
      <Link to="/" className="logo">Ting Guitar</Link>
    </div>
  </header>
);

export default React.memo(Header);
