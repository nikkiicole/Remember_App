import React from 'react'
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import {getMemories} from "../../services/memory.js"

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
    console.log(id)
  }

  // i need to set up some type of filter that will filter out the 
  // currently selected memoirs memories
  let filteredMemory = memories.filter(memory => memory.memoir_id === id)

 
  return (
    <div>
      <h1>Memory Gallery</h1>
      {filteredMemory.map((memory) => {
        return <h3>{memory.content}</h3>;
        
      
      })}

{/* {memories.filter(memory => memory.memoir_id === id) => {
        return <h3>{memory.content}</h3>;
        
      
      }} */}
      {/* {memories.filter(memory => memory.memoir_id === id).map
        return <h3>{memory.content}</h3>
      
} */}
        {/* {memories.filter(memory => memory.memoir_id === id).map(filteredMemory => (
    <li>{filteredMemory.content}</li>
        ))} */}
      {/* {memories.filter(memory => memory.memoir_id === id)
        return <h3>{memory.content}</h3>
      }
       */}
    </div>
  )
}

export default MemoryGallery
