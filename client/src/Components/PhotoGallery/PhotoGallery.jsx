import React from 'react'

import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import { getPhotos } from "../../services/photo.jsx"
import CreatePhoto from "../CreatePhoto/CreatePhoto.jsx"
import { deletePhoto } from "../../services/photo.jsx"
import "./PhotoGallery.css"
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';



import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';

// input

function PhotoGallery(props) {
  const { id } = useParams();
  const [photosO, setPhotos] = useState([])
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
    setToggle((prevState)=> !prevState)
  }
  const theme = createMuiTheme({
    typography: {
      h3: {
        fontSize: 55
      }
    },
    palette: {
      primary: {
 
        main: pink[200],
      },
      secondary: {
        main: grey[900],
     
    }
  }
  })
  
  return (
    <ThemeProvider theme={theme}>
    <div className="photo-body">
      <h1 className="gallery-title">Photo Gallery</h1>

      <CreatePhoto setToggle={setToggle} id={id} />
      <Link className="link" to={`/user-home/${id}`}><Button startIcon={<HomeIcon /> }size="large"variant="contained" color="secondary" >Memoir Home</Button></Link>
      {photosO.photos && photosO.photos.map((photo) => {
        return (
          <div className="picture-grid-container">
<div className="picture-grid">
          <div class="myGallery" key={photo.id}>
              <div class="item">
              <img src={photo.url} alt={photo.caption} />
              <span class="caption">
            <h1>{photo.caption}</h1>
            <p>Posted By: {photo.user.email }</p>
            {props.currentUser && props.currentUser.id === photo.user_id ?<Button className="delete" size="large"variant="contained" color="secondary" startIcon={<DeleteOutlineOutlinedIcon /> } onClick={() => deletePicture(photo.id)}>Delete</Button>: null}</span>
          </div> 
              </div>
            </div>
          </div>
        )
  
      })}
          
      
        <Link className="link" to={`/user-home/${id}`}><Button startIcon={<HomeIcon />} size="large" variant="contained" color="secondary" >Memoir Home</Button></Link>
        <CreatePhoto setToggle={setToggle} id={id} />
      </div>
    </ThemeProvider>
  )
}

export default PhotoGallery
