import { useState, useEffect } from "react";
import { useParams, Link, useHistory} from "react-router-dom";
import {getMemoir, destroyMemoir} from "../../services/memoir.jsx"


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
      <img src={memoir.profile_picture} alt= "Profile Photo" />
      <h1>{`${memoir.name}'s Memoir`}</h1>
      <h2>Name: {memoir.name}</h2>
      <h2>Sunrise: {memoir.sunrise}</h2>
      <h2>Sunset: {memoir.sunset}</h2>
      <h2>Family Thoughts: {memoir.thoughts}</h2>
      <h2>Shareable Id: {memoir.shareble_id}</h2>
      {props.currentUser && props.currentUser.id === memoir.user_id ?
        <button onClick={() => deleteMemoir(memoir.id)}>Delete</button> : null}
           {props.currentUser && props.currentUser.id === memoir.user_id ?
       <Link to={`/edit-memoir/${memoir.id}`}>Edit Memoir</Link>: null}
      
      
      <Link to={`/user-home/${id}/memories`}>Memories</Link>
      <Link to={`/user-home/${id}/photos`}>Photos</Link>
    </div>
  )
}

export default MemoirHome
