import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/user-home">User Home</Link>
      <Link to="/create-memoir">Create Memoir</Link>
    </div>
  )
}

export default Header
