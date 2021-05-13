import { useState, useEffect } from "react";
import { useParams, Link, useHistory} from "react-router-dom";
import { getMemoir, destroyMemoir } from "../../services/memoir.jsx"
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Button from  '@material-ui/core/Button'


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
    <div>
      {/* need to replace second half with real website to see if it is working  */}
     
      <img src={memoir.profile_picture} alt= "Profile Photo" />
      <h1>{`${memoir.name}'s Memoir`}</h1>
      <h2>Name: {memoir.name}</h2>
      <h2>Sunrise: {memoir.sunrise}</h2>
      <h2>Sunset: {memoir.sunset}</h2>
      <h2>Family Thoughts: {memoir.thoughts}</h2>
      <a href={`https://www.facebook.com/share.php?u=http://localhost:3001/user-home/${id}`}><img src="https://res.cloudinary.com/dbmxg3su8/image/upload/v1620875227/Screen_Shot_2021-05-12_at_11.05.53_PM_yo0kb2.png" border="0" /></a>
      <h2>Shareable Id: {memoir.shareble_id}</h2>
      {props.currentUser && props.currentUser.id === memoir.user_id ?
        <Button size="large"variant="contained" color="secondary" startIcon={<DeleteOutlineOutlinedIcon /> } onClick={() => { if (window.confirm('Are you sure you wish to delete this memoir?')) deleteMemoir(memoir.id) }}>Delete</Button> : null}
      
      {props.currentUser && props.currentUser.id === memoir.user_id ?
       <Link to={`/edit-memoir/${memoir.id}`}>Edit Memoir</Link>: null}
      
      
      <Link to={`/user-home/${id}/memories`}>Memories</Link>
      <Link to={`/user-home/${id}/photos`}>Photos</Link>
    </div>
  )
}

export default MemoirHome
