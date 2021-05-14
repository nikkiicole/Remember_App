import { Route, Switch,  useHistory } from "react-router-dom";
import './App.css';
import SignIn from "./Components/SignIn/SignIn.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import Home from "./Components/Home/Home.jsx"
import Header from "./Components/Header/Header.jsx"
import UserHome from './Components/UserHome/UserHome.jsx'
import CreateMemoir from "./Components/CreateMemoir/CreateMemoir.jsx"
import EditMemoir from "./Components/EditMemoir/EditMemoir.jsx"
import EditMemory from "./Components/EditMemory/EditMemory.jsx"
import MemoirHome from "./Components/MemoirHome/MemoirHome.jsx"
import MemoryGallery from "./Components/MemoryGallery/MemoryGallery.jsx"
import PhotoGallery from "./Components/PhotoGallery/PhotoGallery.jsx"
import { useEffect, useState } from "react";
import { verifyUser } from "./services/auth"
import BelowHeader from "./Components/BelowHeader/BelowHeader.jsx"


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [toggle, setToggle] = useState(false);
  


  const history = useHistory();

  useEffect(() => {
    verify();
  }, [toggle]);

  const logout = async () => {
    await localStorage.clear()
    setCurrentUser(null)
    history.push("/login")
  }

  const verify = async () => {
    let user = await verifyUser();
    setCurrentUser(user);
  };





  return (
    <div className="App">
      <Header currentUser={currentUser} logout={logout} />
      <BelowHeader/>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <SignIn verify={verify} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user-home">
          {/* <UserHome currentUser={currentUser}/> */}
          <UserHome setToggle={setToggle}/>
        </Route>
        <Route path="/create-memoir">
          <CreateMemoir />
        </Route>
        <Route exact path="/user-home/:id">
          <MemoirHome currentUser={currentUser} />
        </Route>
        <Route path="/edit-memoir/:id">
          <EditMemoir />
        </Route>
        <Route exact path="/user-home/:id/memories">
          <MemoryGallery currentUser={currentUser} />
        </Route>
        <Route path="/user-home/:id/memories/edit-memoir/:memory_id">
          <EditMemory />
        </Route>
        <Route path="/user-home/:id/photos">
          <PhotoGallery currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
