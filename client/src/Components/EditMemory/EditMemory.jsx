import { useState, useEffect } from 'react'
import {useParams, useHistory} from "react-router-dom"
import { editMemory } from "../../services/memory.js"
import { getMemory } from "../../services/memory.js"
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import Button from '@material-ui/core/Button'
import "../MemoryGallery/MemoryGallery.css"

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
    // eslint-disable-next-line
  }, []);

  const fetchMemories = async () => {
    const res = await getMemory(id);
    setMemory(res);

  }
  return (
    <div className="blue-background">
      <h3 className="mm-title">Edit Memory</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
      
        <textarea className="textarea" name="content" value={memory.content} />
        <div>
        <Button startIcon={<CheckBoxOutlinedIcon />} size="large" variant="contained" color="secondary" type="submit">Submit</Button>
      </div>
      </form>
    </div>
  )
}

export default EditMemory