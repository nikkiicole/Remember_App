import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import { getMemories } from "../../services/memory.js"
import CreateMemory from "../CreateMemory/CreateMemory.jsx"
import { deleteMemory } from "../../services/memory.js"

function MemoryGallery(props) {
  const { id } = useParams();
  const [memoriesO, setMemories] = useState([])
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetchMemories();
  }, [toggle]);

  const fetchMemories = async () => {
    const res = await getMemories(id);
    setMemories(res);
    console.log(res)
    // console.log(id)'
    // console.log(props.user)
  }
  const deleteMemoryF = async (id) => {
    await deleteMemory(id);
    setMemories(prevState => prevState.filter(memory => memory.id !== id));
  }


 
  return (
    <div>
      <h1>Memory Gallery</h1>
      { memoriesO && memoriesO.memories.map((memory) => {
        return(
        <div key={memory.id}>
            <h3>{memory.content}</h3>
             <p>{memory.user.email }</p>
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
