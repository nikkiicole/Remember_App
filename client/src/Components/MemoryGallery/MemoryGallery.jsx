import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import { getMemories } from "../../services/memory.js"
import CreateMemory from "../CreateMemory/CreateMemory.jsx"
import { deleteMemory } from "../../services/memory.js"

function MemoryGallery(props) {
  const { id } = useParams();
  const [memories, setMemories] = useState([])
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetchMemories();
  }, [toggle]);

  const fetchMemories = async () => {
    const res = await getMemories(id);
    setMemories(res);
    console.log(res)
    // console.log(id)
  }
  const deleteMemoryF = async (id) => {
    await deleteMemory(id);
    setMemories(prevState => prevState.filter(memory => memory.id !== id));
  }

  // i need to set up some type of filter that will filter out the 
  // currently selected memoirs memories
//   let filteredMemory = memories.filter(memory => memory.memoir_id === parseInt(id))  
// console.log(filteredMemory, memories, parseInt(id))
 
  return (
    <div>
      <h1>Memory Gallery</h1>
   
      {memories.map((memory) => {
        return(
        <div>
            <h3>{memory.content}</h3>
            
            {props.currentUser && props.currentUser.id === memory.user_id ?
            <button onClick={() => { if (window.confirm('Are you sure you wish to delete this memory?')) deleteMemoryF(memory.id)} }>Delete</button>: null}
            {props.currentUser && props.currentUser.id === memory.user_id ?
            <Link to={`/user-home/${memory.id}/memories/edit-memoir/${id}`}>Edit Memory</Link>: null}
        </div>
        )
      })}
   <CreateMemory setToggle={setToggle} id={id} />
    </div>
  )
}

export default MemoryGallery
