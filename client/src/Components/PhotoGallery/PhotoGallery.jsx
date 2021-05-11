import React from 'react'

import { useState, useEffect } from "react";
import { useParams, useHistory} from "react-router-dom";
import { getPhotos } from "../../services/photo.jsx"
import CreatePhoto from "../CreatePhoto/CreatePhoto.jsx"
import { deletePhoto } from "../../services/photo.jsx"



function PhotoGallery() {
  const { id } = useParams();
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetchPhotos();
  }, []);

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

      <CreatePhoto id={id} />
      
      {photos.map((photo) => {
        return (
          <div>
        <img src={photo.img_url} alt={photo.caption} />
            <h1>{photo.caption}</h1>
            <button onClick={() => deletePicture(photo.id)}>Delete</button>
          </div>
        )
  
      })}
    </div>
  )
}

export default PhotoGallery
