import React, { useState } from "react";
import { createMemoir } from "../../services/memoir.jsx"
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import TextField from '@material-ui/core/TextField';

function CreateMemoir() {
  const history = useHistory();

  const [input, setInput] = useState({
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createMemoir(input);
    console.log(res);
    history.push('/user-home')
  };

  return (
    <div>
      <h1>Create Memoir</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
       
        <TextField label="Name" variant="filled" color="secondary"  name="name" type="text" value={input.name} />
        
        <TextField label="Sunrise" variant="filled" color="secondary"   name="sunrise" type="text" value={input.sunrise} />
       
        <TextField label="Sunset" variant="filled" color="secondary"  name="sunset" type="text" value={input.sunset} />
    
        <TextField label="Family Thoughts" variant="filled"  color="secondary"  name="thoughts" type="text" value={input.thoughts} />
     
        <TextField label="Shareable ID" variant="filled" color="secondary"  name="shareble_id" type="text" value={input.shareble_id} />
    
        <TextField label="Profile Picture URL" variant="filled" color="secondary"   name="profile_picture" type="text" value={input.profile_picture} />
        <Button startIcon={<CheckBoxOutlinedIcon /> }size="large"variant="contained" color="secondary" type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default CreateMemoir
