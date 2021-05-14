import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import { getMemories } from "../../services/memory.js"
import CreateMemory from "../CreateMemory/CreateMemory.jsx"
import { deleteMemory } from "../../services/memory.js"
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import "./MemoryGallery.css"

function MemoryGallery(props) {
  const { id } = useParams();
  const [memoriesO, setMemories] = useState([])
  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    // eslint-disable-next-line 
    fetchMemories();
// eslint-disable-next-line
  }, [toggle]);

  const fetchMemories = async () => {
    const res = await getMemories(id);
    setMemories(res);

  }
  const deleteMemoryF = async (id) => {
    await deleteMemory(id);
    setToggle((prevState)=> !prevState)
 
  }
 
  return (
    <div className="alt">
      <div className="memory-container">
      <h1 className= "m-title">Memory Gallery</h1>
      { memoriesO.memories && memoriesO.memories.map((memory) => {
        return(
        <div className="content-container"key={memory.id}>
            <h3>{memory.content}</h3>
            <p>Posted By: {memory.user.email}</p>
            
            {props.currentUser && props.currentUser.id === memory.user_id ?
             <Button className="delete" size="large"variant="contained" color="secondary" startIcon={<DeleteOutlineOutlinedIcon /> } onClick={() => { if (window.confirm('Are you sure you wish to delete this memory?')) deleteMemoryF(memory.id) }}>Delete</Button> : null}
            
            {props.currentUser && props.currentUser.id === memory.user_id ?
              <Link className="link" to={`/user-home/${memory.id}/memories/edit-memoir/${id}`}><Button size="large" variant="contained" color="secondary" startIcon={<EditOutlinedIcon />}>Edit Memory</Button></Link> : null}
           
        </div>
        )
      })}
      <Link className="link" to={`/user-home/${id}`}><Button size="large" variant="contained" color="secondary" startIcon={<HomeIcon />}>Memoir Home</Button></Link>
      
      <CreateMemory setToggle={setToggle} id={id} />
      </div>
    </div>
  )
}

export default MemoryGallery
