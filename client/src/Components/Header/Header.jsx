import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import "./Header.css"

function Header(props) {
  function Nav() {
    if (props.currentUser) {
      return (
        <div className="topnav">
        <h1>Remember</h1>
        
        <Link to="/user-home"><Button startIcon={<HomeIcon /> }size="large"variant="contained" color="secondary" >Home</Button></Link>
          <Link to="/create-memoir"><Button startIcon={<HomeIcon /> }size="large"variant="contained" color="secondary" >Create Memoir</Button></Link>
          
          <Button startIcon={<MeetingRoomIcon />} size="large" variant="contained" color="secondary" onClick={props.logout}>Sign out</Button>
          <p>{props.currentUser && props.currentUser.email}</p>
        </div>
      )
    } else {
      return (
        <div className="topnav">
            <h1>Remember</h1>
          <Link to="/"><Button startIcon={<HomeIcon /> }size="large"variant="contained" color="secondary" >Home</Button></Link>
        <Link to="/login"><Button startIcon={<HowToRegIcon /> }size="large"variant="contained" color="secondary" >Sign In</Button></Link>
          <Link to="/signup"><Button startIcon={<HowToRegIcon /> }size="large"variant="contained" color="secondary" >Sign Up</Button></Link>
        </div>
      )
    }
  }
  return (
    <div>
      {Nav()}
    </div>
  )
}

export default Header
