import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getMemoir, destroyMemoir } from "../../services/memoir.jsx";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Button from "@material-ui/core/Button";
import "./MemoirHome.css";

function MemoirHome(props) {
  const { id } = useParams();
  const [memoir, setMemoir] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchMemoir();
    // eslint-disable-next-line
  }, []);

  const fetchMemoir = async () => {
    const res = await getMemoir(id);
    setMemoir(res);
    console.log(res);
  };

  const deleteMemoir = async (id) => {
    await destroyMemoir(id);
    history.push("/user-home");
  };

  const [background, setBackground] = useState("wood-flowers");

  function handleInput(event) {
    let { value } = event.target;
    setBackground(value);
    console.log(background);
  }

  return (
    <div className={background}>
      <div className="container">
        <h1 className="memoir-header">{`${memoir.name}'s Memoir`}</h1>

        <select
          className="input-select"
          id="backgroundImage"
          required
          onChange={handleInput}
          value="design"
        >
          <option value="white-bg-flowers">
            White Background White Flowers
          </option>
          <option value="blue-flowers">Blue Background With Flowers </option>
          <option value="white-pink-flowers">
            White Background Pink Flowers{" "}
          </option>
          <option value="white-flowers">White Flower Background </option>
          <option value="pink-white-stripe">
            Pink And White Striped Background{" "}
          </option>
          <option value="wood-flowers" default>
            Wood Background Flower Header{" "}
          </option>
          <option value="white-leaf">
            White Background Green Leaf Header{" "}
          </option>
          <option value="green-tree">Green Background Tree Design </option>
          <option value="wood-pink-flowers">
            Wood Background Pink Flower Header{" "}
          </option>
          <option value="white-fall">White Background Fall Leaf Header </option>
          <option value="yellow-flowers">
            Yellow Background White Flower Footer
          </option>
          <option value="mint-wood">Mint Wood Background Pink Flowers</option>
        </select>

        <img className="profile-picture" src={memoir.url} alt="Profile" />
        <h2 className="memoir-font">Name: {memoir.name}</h2>
        <h2 className="memoir-font">Sunrise: {memoir.sunrise}</h2>
        <h2 className="memoir-font">Sunset: {memoir.sunset}</h2>
        <h2 className="memoir-thoughts">Family Thoughts: {memoir.thoughts}</h2>
        <a
          href={`https://www.facebook.com/share.php?u=https://always-remember.netlify.app/user-home/${id}`}
        >
          <img
            src="https://res.cloudinary.com/dbmxg3su8/image/upload/v1620875227/Screen_Shot_2021-05-12_at_11.05.53_PM_yo0kb2.png"
            alt="facebook logo"
            border="0"
          />
        </a>
        <h2 className="memoir-font">Shareable Id: {memoir.shareble_id}</h2>
        <div className="button-container">
          {props.currentUser && props.currentUser.id === memoir.user_id ? (
            <Button
              className="delete"
              size="large"
              variant="contained"
              color="secondary"
              startIcon={<DeleteOutlineOutlinedIcon />}
              onClick={() => {
                if (
                  window.confirm("Are you sure you wish to delete this memoir?")
                )
                  deleteMemoir(memoir.id);
              }}
            >
              Delete
            </Button>
          ) : null}

          {props.currentUser && props.currentUser.id === memoir.user_id ? (
            <Link className="link" to={`/edit-memoir/${memoir.id}`}>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                startIcon={<EditOutlinedIcon />}
              >
                Edit Profile
              </Button>
            </Link>
          ) : null}

          <Link className="link" to={`/user-home/${id}/memories`}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              startIcon={<FavoriteBorderOutlinedIcon />}
            >
              Memories
            </Button>
          </Link>

          <Link className="link" to={`/user-home/${id}/photos`}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              startIcon={<PhotoOutlinedIcon />}
            >
              Photos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MemoirHome;
