import { useState } from "react";
import { editMemoir } from "../../services/memoir.jsx"
import { useParams, useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import TextField from '@material-ui/core/TextField';

function EditMemoir() {
  let { id } = useParams()
  const history = useHistory();

  const [input, setInput] = useState({
    // memoir: id
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await editMemoir(id, input);
    console.log(res);
    history.push(`/user-home/${id}`)
  };

  return (
    <div className="alt-for-background">
      <div className="form-container">
        
        <h1 className="m-title">Edit Memoir</h1>
        
        <form className="form" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="format">
          <TextField label="Name" variant="outlined" color="secondary" name="name" type="text" value={input.name} />
            </div>
            <div className="format">
          <TextField label="Sunrise" variant="outlined" color="secondary" name="sunrise" type="text" value={input.sunrise} />
            </div>
            <div className="format">
        <TextField  label="Sunset" variant="outlined" color="secondary"  name="sunset" type="text" value={input.sunset} />
            </div>
            <div className="format">
        <TextField label="Family Thoughts" variant="outlined"  color="secondary"  name="thoughts" type="text" value={input.thoughts} />
          </div>
          <div className="format">
        <TextField label="Shareable ID" variant="outlined" color="secondary"  name="shareble_id" type="text" value={input.shareble_id} />
  </div>
  <div className="format">
          <Button startIcon={<CheckBoxOutlinedIcon />} size="large" variant="contained" color="secondary" type="submit">Submit</Button>
        </div>
      </form>
      </div>
      </div>
        
  )
}

export default EditMemoir
