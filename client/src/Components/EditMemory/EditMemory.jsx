import { useState, useEffect } from 'react'
import {useParams, useHistory} from "react-router-dom"
import { editMemory } from "../../services/memory.js"
import { getMemory } from "../../services/memory.js"

function EditMemory() {
  const [memory, setMemory] = useState({})
  const history = useHistory();

  const { id, memory_id } = useParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await editMemory(id, memory_id, memory);
    console.log(res);
    history.push(`/user-home/${memory_id}/memories`)
  };

  useEffect(() => {
    fetchMemories();
  }, []);

  const fetchMemories = async () => {
    const res = await getMemory(id);
    setMemory(res);
    console.log(res)
    // console.log(id)
  }
  return (
    <div>
      <h3>Edit Memory</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Memory:</label>
        <textarea name="content" value={memory.content} />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default EditMemory