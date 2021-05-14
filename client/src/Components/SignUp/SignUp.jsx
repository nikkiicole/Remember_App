import { useState } from "react";
import { registerUser } from "../../services/auth.js";
import { useHistory } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import "./SignUp.css"
import HowToRegIcon from '@material-ui/icons/HowToReg';

function SignUp() {
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
    let res = await registerUser(input);
    console.log(res);
    history.push("/login")
  };

  return (
    <div className="for-background">
    <div className="form-container">
      <h1 className="m-title">Sign Up</h1>
      
      <form className="form" onChange={handleChange} onSubmit={handleSubmit}>
      <div className="format">
        <TextField label="Name" variant="outlined" color="secondary" name="email" type="email" />
   </div>
        <div className="format">
        <TextField label="Password" variant="outlined" color="secondary" name="password" type="password" />
            </div>
            <div className="format">
        <TextField label="Password Confirmation" variant="filled" color="secondary" name="password_confirmation" type="password" />
         
          </div>
          <div className="format">
          <Button size="large" variant="contained" color="secondary" startIcon={<HowToRegIcon />} type="submit">Sign Up</Button>
</div>
        </form>
    
    </div></div>
  );
}

export default SignUp;