import { useState, useEffect } from "react";
import { useParams, Link, useHistory} from "react-router-dom";
import { getMemoir, destroyMemoir } from "../../services/memoir.jsx"
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Button from '@material-ui/core/Button'
import "./MemoirHome.css"


function MemoirHome(props) {
  const { id } = useParams();
  const [memoir, setMemoir] = useState([])
  const history = useHistory();

  useEffect(() => {
    fetchMemoir();
  }, []);

  const fetchMemoir = async () => {
    const res = await getMemoir(id);
    setMemoir(res);
    console.log(res)
  }

  const deleteMemoir = async (id) => {
    await destroyMemoir(id);
    history.push('/user-home');
  }


  return (
    <div className="container-container">
    <div className="container">
      {/* need to replace second half with real website to see if it is working  */}
      <h1 className="memoir-header">{`${memoir.name}'s Memoir`}</h1>
      <img className="profile-picture" src={memoir.profile_picture} alt= "Profile Photo" />
      <h2 className="memoir-font">Name: {memoir.name}</h2>
      <h2 className="memoir-font">Sunrise: {memoir.sunrise}</h2>
      <h2 className="memoir-font">Sunset: {memoir.sunset}</h2>
      <h2 className="memoir-thoughts">Family Thoughts: {memoir.thoughts}</h2>
      <a href={`https://www.facebook.com/share.php?u=http://localhost:3001/user-home/${id}`}><img src="https://res.cloudinary.com/dbmxg3su8/image/upload/v1620875227/Screen_Shot_2021-05-12_at_11.05.53_PM_yo0kb2.png" border="0" /></a>
        <h2 className="memoir-font">Shareable Id: {memoir.shareble_id}</h2>
        <div className="button-container">
      {props.currentUser && props.currentUser.id === memoir.user_id ?
        <Button className="delete" size="large"variant="contained" color="secondary" startIcon={<DeleteOutlineOutlinedIcon /> } onClick={() => { if (window.confirm('Are you sure you wish to delete this memoir?')) deleteMemoir(memoir.id) }}>Delete</Button> : null}
      
      {props.currentUser && props.currentUser.id === memoir.user_id ?
       <Link className="link" to={`/edit-memoir/${memoir.id}`}><Button size="large" variant="contained" color="secondary" startIcon={<EditOutlinedIcon />}>Edit Profile</Button></Link>: null}
      
      
      <Link className="link" to={`/user-home/${id}/memories`}><Button size="large" variant="contained" color="secondary" startIcon={<FavoriteBorderOutlinedIcon />}>Memories</Button></Link>
      
          <Link className="link" to={`/user-home/${id}/photos`}><Button size="large" variant="contained" color="secondary" startIcon={<PhotoOutlinedIcon />}>Photos</Button></Link>
        </div>
      </div>
      </div>
  )
}

export default MemoirHome
