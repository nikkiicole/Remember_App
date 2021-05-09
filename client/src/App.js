import { Route, Switch } from "react-router-dom";
import './App.css';
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp.jsx";
// import Header from "./Components/Header/Header.jsx"
import { useEffect, useState } from "react";
import {verifyUser} from "./services/auth"
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    let user = await verifyUser();
    setCurrentUser(user);
  };
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <SignIn verify={verify} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
