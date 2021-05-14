import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getUsersMemoirs} from "../../services/memoir.jsx"
import Search from "../Search/Search.jsx";
import Button from '@material-ui/core/Button'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import "./UserHome.css"

function UserHome(props) {
  const [userMemoirs, setUserMemoirs] = useState([])
  

  useEffect(() => {
    // eslint-disable-next-line
    fetch()
    // eslint-disable-next-line
  }, []);

  const fetch = async () => {
    const data = await getUsersMemoirs();
    setUserMemoirs(data);
    props.setToggle((prevState)=> !prevState)

  }

  return (
    <div className="user-container-container">
      <h1 className = "m-title">Memoirs</h1>
      <div className="user-container">
      <div className="memoirs-container">
      {userMemoirs.map((userMemoir) => {
    
        return <Link key={userMemoir.id} className="link" to={`/user-home/${userMemoir.id}`}><Button startIcon={<FavoriteBorderOutlinedIcon /> }size="large"variant="contained" color="secondary" >{userMemoir.name}</Button></Link>;
   
      })}
      </div>
        <div className="search-container">
          <div className ="create-container">
        <h1 className="create-mem-title">Create A New Memoir</h1>
      <Link className="link" to="/create-memoir"><Button startIcon={<AddBoxRoundedIcon /> }size="large"variant="contained" color="secondary" >Create</Button></Link>
      </div>

        <Search  />
        </div>
      </div>
    </div>
  )
}

export default UserHome
