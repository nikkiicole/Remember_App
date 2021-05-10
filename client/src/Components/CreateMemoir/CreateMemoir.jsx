import React, { useState } from "react";
import {createMemoir} from "../../services/memoir.jsx"

function CreateMemoir() {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createMemoir(input);
    console.log(res);
  };

  return (
    <div>
      <h1>Create Memoir</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" value={input.name} />
        <label>Sunrise</label>
        <input name="sunrise" type="text" value={input.sunrise} />
        <label>Sunset</label>
        <input name="sunset" type="text" value={input.sunset} />
        <label>Thoughts</label>
        <input name="thoughts" type="text" value={input.thoughts} />
        <label>Shareable Id</label>
        <input name="shareble_id" type="text" value={input.shareble_id} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateMemoir
