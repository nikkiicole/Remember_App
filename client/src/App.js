import { Route, Switch } from "react-router-dom";
import './App.css';
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
