import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import "./Header.css";

function Header(props) {
  function Nav() {
    if (props.currentUser) {
      return (
        <div className="topnav">
          <div>
            <h1 className="logo">Remember</h1>
          </div>

          <div className="header-group">
            <Link className="link" to="/user-home">
              <Button
                startIcon={<HomeIcon />}
                size="medium"
                variant="contained"
                color="secondary"
              >
                {props.currentUser && props.currentUser.email}
              </Button>
            </Link>
            <Link className="link" to="/create-memoir">
              <Button
                startIcon={<HomeIcon />}
                size="medium"
                variant="contained"
                color="secondary"
              >
                Create Memoir
              </Button>
            </Link>

            <Button
              startIcon={<MeetingRoomIcon />}
              size="medium"
              variant="contained"
              color="secondary"
              onClick={props.logout}
            >
              Sign out
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="topnav">
          <div>
            <h1 className="logo">Remember</h1>
          </div>
          <div className="header-group">
            <Link className="link" to="/">
              <Button
                startIcon={<HomeIcon />}
                size="medium"
                variant="contained"
                color="secondary"
              >
                Home
              </Button>
            </Link>
            <Link className="link" to="/login">
              <Button
                startIcon={<HowToRegIcon />}
                size="medium"
                variant="contained"
                color="secondary"
              >
                Sign In
              </Button>
            </Link>
            <Link className="link" to="/signup">
              <Button
                startIcon={<HowToRegIcon />}
                size="medium"
                variant="contained"
                color="secondary"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      );
    }
  }
  return <div>{Nav()}</div>;
}

export default Header;
