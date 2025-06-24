import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/herbs">Herbs</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
