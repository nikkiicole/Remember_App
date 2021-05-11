import React, { useState } from 'react'
import {createPhoto} from "../../services/photo.jsx"

function CreatePhoto(props) {

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
    const res = await createPhoto(props.id, input);
    console.log(res);
  };

  return (
    <div>
      <h3>Upload Photo</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Photo URL: </label>
        <input name="img_url" type="text" value={input.img_url} />
        <label>Caption: </label>
        <input name="caption" type="text" value={input.caption} />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default CreatePhoto
