import { useState } from 'react'
import { createMemory } from "../../services/memory.js"

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

export default CreateMemory
