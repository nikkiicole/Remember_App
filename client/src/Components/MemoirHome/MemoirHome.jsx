import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import {getMemoir} from "../../services/memoir.jsx"

function MemoirHome() {
  const { id } = useParams();
  const [memoir, setMemoir] = useState([])

  useEffect(() => {
    fetchMemoir();
  }, []);

  const fetchMemoir = async () => {
    const res = await getMemoir(id);
    setMemoir(res);
    console.log(res)
  }


  return (
    <div>
      <h1>{`${memoir.name}'s Memoir`}</h1>
      <h2>Name: {memoir.name}</h2>
      <h2>Sunrise: {memoir.sunrise}</h2>
      <h2>Sunset: {memoir.sunset}</h2>
      <h2>Family Thoughts: {memoir.thoughts}</h2>
      <h2>Shareable Id: {memoir.shareble_id}</h2>
      <Link to={`/user-home/${id}/memories`}>Memories</Link>
      <Link to={`/user-home/${id}/photos`}>Photos</Link>
    </div>
  )
}

export default MemoirHome
