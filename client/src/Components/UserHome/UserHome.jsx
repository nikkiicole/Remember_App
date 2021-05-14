import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getUsersMemoirs} from "../../services/memoir.jsx"
import Search from "../Search/Search.jsx";
import Button from '@material-ui/core/Button'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import "./UserHome.css"

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
    <div className="user-container-container">
      <h1>Memoirs</h1>
      <div className="user-container">
      <div className="memoirs-container">
      {userMemoirs.map((userMemoir) => {
        // return <Link to={`/user-home/${userMemoir.id}`}><button>{userMemoir.name}</button></Link>;
        return <Link className="link" to={`/user-home/${userMemoir.id}`}><Button startIcon={<FavoriteBorderOutlinedIcon /> }size="large"variant="contained" color="secondary" >{userMemoir.name}</Button></Link>;
   
      })}
      </div>
        <div className="search-container">
          <div className ="create-container">
        <h2>Create A New Memoir</h2>
      <Link className="link" to="/create-memoir"><Button startIcon={<AddBoxRoundedIcon /> }size="large"variant="contained" color="secondary" >Create</Button></Link>
      </div>
{/* essentially i want to bbe able to display all memoirs.name for current user then link to create a memoir also link search memoirs  */}
        <Search className="search-component" />
        </div>
      </div>
    </div>
  )
}

export default UserHome
