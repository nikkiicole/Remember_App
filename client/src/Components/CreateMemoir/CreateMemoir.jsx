import React, { useState } from "react";
import { createMemoir } from "../../services/memoir.jsx"
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import CustomizedMenus from "../BackgroundPictureMenu/BackgroundMenu"

import '@fontsource/roboto';

import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container"
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    padding: '0 30px'
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return  <Button className={classes.root}>Test Styled Button </Button>
}

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const myData = new FormData();
  //   myData.append("picture", fileInput.file);
  //   // myData.append("caption", form.caption);
  //   const res = await createMemoir(myData);
  //   console.log(res);
  //   history.push('/user-home')
  // };
  const theme = createMuiTheme({
    typography: {
      h3: {
        fontSize: 55
      }
    },
    palette: {
      primary: {
        // main: grey[900],
        main: pink[200],
      },
      secondary: {
        main: grey[900],
        // main: pink[200],
    }
  }
  })
  
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
    // props.setToggle((prevState)=> !prevState)
  console.log(res);
};

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <div>
          {CustomizedMenus()}

          <Grid container spacing={5} justify="center">
          <Grid item xs={12} >
            <Paper style={{height:75, width:50}} />
            </Grid>
            <Grid item>
            <Paper style={{height:75, width:50}} />
            </Grid>
            <Grid item>
            <Paper style={{height:75, width:50}} />
            </Grid>
            <Grid item>
            <Paper style={{height:75, width:50}} />
            </Grid>
            <Grid item>
            <Paper style={{height:75, width:50}} />
          </Grid>
        </Grid>
    
        <Typography variant="h3">Create Memoir</Typography>
      <form onChange={handleFormChange} onSubmit={handleSubmit}>
       <ButtonStyled />
        <TextField label="Name" variant="filled" color="secondary"  name="name" type="text" value={form.name} />
        
        <TextField label="Sunrise" variant="filled" color="secondary"   name="sunrise" type="date" value={form.sunrise} />
       
        <TextField label="Sunset" variant="filled" color="secondary"  name="sunset" type="date" value={form.sunset} />
    
        <TextField label="Family Thoughts" variant="filled"  color="secondary"  name="thoughts" type="text" value={form.thoughts} />
     
        <TextField label="Shareable ID" variant="filled" color="secondary"  name="shareble_id" type="text" value={form.shareble_id} />
    
            {/* <TextField label="Profile Picture URL" variant="filled" color="secondary"   name="profile_picture" type="text" value={input.profile_picture} /> */}
            <input name="file" type="file"  />
        <Button startIcon={<CheckBoxOutlinedIcon /> }size="large"variant="contained" color="secondary" type="submit">Submit</Button>
          </form>
          <h3>Upload Photo</h3>
      {/* <form onChange={handleFormChange} onSubmit={handlePhotoSubmit}>
        <label>Photo URL: </label>
        <input name="file" type="file"  />
        {/* <label>Caption: </label> */}
        {/* <input name="caption" type="text" value={form.caption} /> */}
        {/* <input type="submit"/> */} */
      {/* </form> */}

        </div>
        </Container>
  </ThemeProvider>)
}

export default CreateMemoir
