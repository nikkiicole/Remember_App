
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button'

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/signup"><Button startIcon={<KeyboardArrowRightIcon />} size="large" variant="contained" color="secondary" >Get Started</Button></Link>
    </div>
  )
}

export default Home
