import { useState } from "react";
import { loginUser } from "../../../src/services/auth.js";
import {useHistory} from "react-router-dom"

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
    <div>
      <h1>Sign In</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" />
        <label>Password</label>
        <input name="password" type="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
// push to user home page 
export default SignIn;