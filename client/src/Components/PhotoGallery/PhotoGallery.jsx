import React from 'react'

import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import {getPhotos} from "../../services/photo.jsx"

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
  return (
    <div>
      <h1>Photo Gallery</h1>
      {photos.map((photo) => {
        return (
          <div>
        <img src={photo.img_url} alt={photo.caption} />
          <h1>{photo.caption}</h1>
          </div>
        )
  
      })}
    </div>
  )
}

export default PhotoGallery
