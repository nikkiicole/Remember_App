import { useState } from "react";
import { loginUser } from "../../../src/services/auth.js";
import { useHistory } from "react-router-dom"

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import "./SignIn.css"
import HowToRegIcon from '@material-ui/icons/HowToReg';

function SignIn(props) {
  const [input, setInput] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await loginUser(input);
    console.log(res);
    props.verify();
    history.push("/user-home")
  };
  return (
    <div className="for-background">
    <div className="form-container">
      <h1 className="m-title">Sign In</h1>
      
      <form className="form" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="format">
        <TextField label="Email" variant="outlined" color="secondary" name="email" type="email" />
        </div>
        <div className="format">

        <TextField label="Password" variant="outlined" color="secondary" name="password" type="password" />
        </div>
        <div className="format">
        <Button size="large" variant="contained" color="secondary" startIcon={<HowToRegIcon />} type="submit">Sign In</Button>
      </div>
      </form>
  
      </div>
    </div>
  );
}
// push to user home page 
export default SignIn;

