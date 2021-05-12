import { Route, Switch, useParams } from "react-router-dom";
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
import {verifyUser} from "./services/auth"
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    verify();
  }, []);



  const verify = async () => {
    let user = await verifyUser();
    setCurrentUser(user);
  };
  return (
    <div className="App">
      <Header />
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
          <UserHome/>
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
        <Route path="/user-home/:id/memories">
          <MemoryGallery />
        </Route>
        <Route path="/edit-memory/:id">
          <EditMemory />
        </Route>
        <Route path="/user-home/:id/photos">
          <PhotoGallery />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
