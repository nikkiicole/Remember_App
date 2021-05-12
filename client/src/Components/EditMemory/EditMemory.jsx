import { useState, useEffect } from 'react'
import {useParams, useHistory} from "react-router-dom"
import { editMemory } from "../../services/memory.js"
import { getMemories } from "../../services/memory.js"

function EditMemory() {
  const [input, setInput] = useState({

  });
  const [memory, setMemory] = useState([])
  const history = useHistory();

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
    history.push(`/user-home/${memory_id}/memories`)
  };

  useEffect(() => {
    fetchMemories();
  }, []);

  const fetchMemories = async () => {
    const res = await getMemories(id);
    setMemory(res);
    console.log(res)
    // console.log(id)
  }
  return (
    <div>
      <h3>Edit Memory</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Memory:</label>
        <textarea defaultValue={memory.content} name="content" value={input.content} />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default EditMemory