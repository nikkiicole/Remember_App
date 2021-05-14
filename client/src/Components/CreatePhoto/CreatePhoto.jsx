import { useState, useEffect} from 'react'
import {createPhoto} from "../../services/photo.jsx"


function CreatePhoto(props) {



  // const [input, setInput] = useState({

  // });
  
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await createPhoto(props.id, input);
  //   props.setToggle((prevState)=> !prevState)
  //   console.log(res);

  // };
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

  return (
    <div>
      <h3>Upload Photo</h3>
      <form onChange={handleFormChange} onSubmit={handleSubmit}>
        <label>Photo URL: </label>
        <input name="file" type="file"  />
        <label>Caption: </label>
        <input name="caption" type="text" value={form.caption} />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default CreatePhoto
