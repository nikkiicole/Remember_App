
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button'
import "./Home.css"

function Home() {
  return (
    <div className="home-background">
      <h1 className="home-title">Welcome to Remember</h1>
      <h2 className="home-font">"My mission here at Remember is to make it easy to memorialize loved ones. Remember gives a beautiful place for you and your loved ones to celebrate that special person you miss. You can create a memoir by getting started below." -Nikki Gilpin</h2>
   

      <Link className="link" to="/signup"><Button startIcon={<KeyboardArrowRightIcon />} size="large" variant="contained" color="secondary" >Get Started</Button></Link>
    </div>
  )
}

export default Home
