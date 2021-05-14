import { useState } from 'react'
import { createMemory } from "../../services/memory.js"
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import Button from '@material-ui/core/Button'
import "../MemoryGallery/MemoryGallery.css"
function CreateMemory(props) {
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
    const res = await createMemory(props.id, input);
    props.setToggle((prevState)=> !prevState)
    console.log(res);
  };


  return (
    <div>
      <h3 className="mm.title" >Add A Memory</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <textarea className="textarea" name="content" value={input.content} />
        <div>
        <Button startIcon={<CheckBoxOutlinedIcon />} size="large" variant="contained" color="secondary" type="submit">Submit</Button>
      </div></form>
    </div>
  )
}

export default CreateMemory
