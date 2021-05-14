import { useState} from 'react'
import {createPhoto} from "../../services/photo.jsx"
import Button from '@material-ui/core/Button'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';


function CreatePhoto(props) {
  
  const [form, setForm] = useState({
    caption: "",
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
    myData.append("caption", form.caption);
    const res = await createPhoto(props.id, myData);
      props.setToggle((prevState)=> !prevState)
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
    <div className="bottom-margin">
      <h2 className="upload-font">Upload Photo</h2>
      <form onChange={handleFormChange} onSubmit={handleSubmit}>
        <label className="form-spacer">Caption: </label>
        <input className="input-height" name="caption" type="text" value={form.caption} />
      
        
        <Button className="form-spacer" size="large"variant="contained" color="secondary" ><input className="input-height" name="file" type="file"  /></Button>
      
          <Button className="form-spacer" startIcon={<CheckBoxOutlinedIcon /> }size="large"variant="contained" color="secondary" type="submit">Submit</Button>
      </form>
      </div>
  </ThemeProvider>
  )
  
}

export default CreatePhoto
