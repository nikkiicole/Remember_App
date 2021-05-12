import React from 'react'
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { getMemories } from "../../services/memory.js"
import CreateMemory from "../CreateMemory/CreateMemory.jsx"
import { deleteMemory } from "../../services/memory.js"

function MemoryGallery() {
  const { id } = useParams();
  const [memories, setMemories] = useState([])

  useEffect(() => {
    fetchMemories();
  }, []);

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
            <h3>{memory.content}</h3>;
            <button onClick={() => deleteMemoryF(memory.id)}>Delete</button>
        </div>
        )
      })}
   <CreateMemory id={id} />
    </div>
  )
}

export default MemoryGallery
