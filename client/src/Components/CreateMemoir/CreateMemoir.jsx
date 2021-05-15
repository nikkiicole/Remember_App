import React, { useState } from "react";
import { createMemoir } from "../../services/memoir.jsx"
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import "../SignIn/SignIn.css"

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

        <div className="alt-for-background">
        <div className="form-container">

    
          <h1 className="m-title">Create Memoir</h1>
          
          

      <form className="form" onChange={handleFormChange} onSubmit={handleSubmit}>
      <div className="format">
          <TextField label="Name" variant="outlined" color="primary" name="name" type="text" value={form.name} />
            </div>
            
          <div className="format">
        <TextField  label="Sunrise" variant="outlined" color="primary"   name="sunrise" type="date" value={form.sunrise} />
            </div>
            
        <div className="format">
        <TextField  label="Sunset" variant="outlined" color="primary"  name="sunset" type="date" value={form.sunset} />
            </div>
            
        <div className="format">
        <TextField label="Family Thoughts" variant="outlined"  color="primary"  name="thoughts" type="text" value={form.thoughts} />
            </div>
            
        <div className="format">
        <TextField label="Six Digit Shareble ID" variant="outlined" color="primary"  name="shareble_id" type="text" value={form.shareble_id} />
  </div>
        <div className="format">
            <Button size="large"variant="contained" color="primary" type="submit"><input name="file" type="file" /></Button>
</div>
            <div className="format">
          <Button startIcon={<CheckBoxOutlinedIcon />} size="large" variant="contained" color="primary" type="submit">Submit</Button>
        </div>
          </form>
</div>
        </div>
    
  </ThemeProvider>)
}

export default CreateMemoir
