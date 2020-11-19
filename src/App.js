import logo from './logo.svg';
import './App.css';
import LogInComponent from './components/LogIn';
import SignUpComponent from './components/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
          <Route path="/">
            <LogInComponent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
