import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  )
}

export default Header
