import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
      <button onClick={props.logout}>Sign out</button>
      <p>{props.currentUser && props.currentUser.email}</p>
      <Link to="/user-home">User Home</Link>
      <Link to="/create-memoir">Create Memoir</Link>
    </div>
  )
}

export default Header
