import React from 'react'

import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { getPhotos } from "../../services/photo.jsx"
import CreatePhoto from "../CreatePhoto/CreatePhoto.jsx"
import { deletePhoto } from "../../services/photo.jsx"



function PhotoGallery(props) {
  const { id } = useParams();
  const [photos, setPhotos] = useState([])
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetchPhotos();
  }, [toggle]);

  const fetchPhotos = async () => {
    const res = await getPhotos(id);
    setPhotos(res);
    console.log(res)
  }
  const deletePicture = async (id) => {
    await deletePhoto(id);
    setPhotos(prevState => prevState.filter(photo => photo.id !== id));
    
  }

  return (
    <div>
      <h1>Photo Gallery</h1>

      <CreatePhoto setToggle={setToggle} id={id} />

      {photos.map((photo) => {
        return (
          <div>
        <img src={photo.url} alt={photo.caption} />
            <h1>{photo.caption}</h1>
            {props.currentUser && props.currentUser.id === photo.user_id ?
            <button onClick={() => deletePicture(photo.id)}>Delete</button>: null}
            
          </div>
        )
  
      })}
    </div>
  )
}

export default PhotoGallery
