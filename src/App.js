//import logo from './logo.svg';
import './App.css';
import LogInComponent from './components/LogIn';
import SignUpComponent from './components/SignUp';
import PostComponent from './components/Post'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotfoundComponent from './components/Notfound';


function App() { 
  return (
    <Router>
      <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <LogInComponent/>
          </Route>
          <Route path="/signup">
            <SignUpComponent />
          </Route>
          <Route path="/post">
            <PostComponent/>
          </Route>
          <Route exact path="/">
            <LogInComponent/>
          </Route>
          <Route>
            <NotfoundComponent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
