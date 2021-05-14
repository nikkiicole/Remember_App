import React, { useState } from "react";
import { createMemoir } from "../../services/memoir.jsx"
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import Container from "@material-ui/core/Container"


function CreateMemoir() {
  const history = useHistory();
  const [form, setForm] = useState({
   
  });

  const [fileInput, setFileInput] = useState({});

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      handleFileUpload(files);
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileUpload = (files) => {
    let file = {
      file: files[0],
    };
    setFileInput(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

  const myData = new FormData();
  myData.append("picture", fileInput.file);
    myData.append("name", form.name);
    myData.append("sunrise", form.sunrise);
    myData.append("sunset", form.sunset);
    myData.append("thoughts", form.thoughts);
    myData.append("shareble_id", form.shareble_id);
console.log(myData)
    const res = await createMemoir(myData);
    history.push('/user-home')
  console.log(res);
};

const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: 55
    }
  },
  palette: {
    primary: {

      main: pink[200],
    },
    secondary: {
      main: grey[900],
   
  }
}
})

  return (
    <ThemeProvider theme={theme}>

        <div>


    
          <h1>Create Memoir</h1>
          
          

      <form onChange={handleFormChange} onSubmit={handleSubmit}>
        <TextField label="Name" variant="outlined" color="secondary"  name="name" type="text" value={form.name} />
        
        <TextField  label="Sunrise" variant="outlined" color="secondary"   name="sunrise" type="text" value={form.sunrise} />
       
        <TextField  label="Sunset" variant="outlined" color="secondary"  name="sunset" type="text" value={form.sunset} />
    
        <TextField label="Family Thoughts" variant="outlined"  color="secondary"  name="thoughts" type="text" value={form.thoughts} />
     
        <TextField label="Shareable ID" variant="outlined" color="secondary"  name="shareble_id" type="text" value={form.shareble_id} />
  
            
            <Button size="large"variant="contained" color="secondary" type="submit"><input name="file" type="file" /></Button>
            
        <Button startIcon={<CheckBoxOutlinedIcon /> }size="large"variant="contained" color="secondary" type="submit">Submit</Button>
          </form>

        </div>
    
  </ThemeProvider>)
}

export default CreateMemoir
