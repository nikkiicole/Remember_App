import { useState } from 'react'
import {useParams} from "react-router-dom"
import { editMemory } from "../../services/memory.js"

function EditMemory() {
  const [input, setInput] = useState({

  });
  const { id, memory_id } = useParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await editMemory(id, memory_id, input);
    console.log(res);
  };


  return (
    <div>
      <h3>Edit Memory</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Memory:</label>
        <textarea name="content" value={input.content} />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default EditMemory