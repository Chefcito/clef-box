import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../Home/Home';
import Explore from '../Explore/Explore';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

class App extends Component {
  constructor(props: {}){
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Router basename="/clef-box">
          <Switch>   
            <Route path="/Login" component={ Login } exact />
            <Route path="/SignUp" component={ SignUp } exact />
            <Route path="/" component={ Home } exact />
            <Route path="/Explore" component={ Explore } exact />
            <Route path="/Profile" component={ Profile } exact />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
