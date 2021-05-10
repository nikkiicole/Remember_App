import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getUsersMemoirs} from "../../services/memoir.jsx"

function UserHome() {
  const [userMemoirs, setUserMemoirs] = useState([])

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const data = await getUsersMemoirs();
    setUserMemoirs(data);
    console.log(userMemoirs)
  }

  return (
    <div>
      <h1>User Home</h1>
      {userMemoirs.map((userMemoir) => {
        return <h3>{userMemoir.name}</h3>;
        
      })}
      <Link to ="/create-memoir">Create</Link>
{/* essentially i want to bbe able to display all memoirs.name for current user then link to create a memoir also link search memoirs  */}
      
    </div>
  )
}

export default UserHome
