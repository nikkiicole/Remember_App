import { useState } from 'react'
import { editMemory } from "../../services/memory.js"

function EditMemory(props) {
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
    const res = await editMemory(props.id, input);
    console.log(res);
  };


  return (
    <div>
      <h3>Write Memory</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Memory:</label>
        <textarea name="content" value={input.content} />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default EditMemory