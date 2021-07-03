import React from 'react'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import PublicProfile from './pages/publicProfile/PublicProfile'
import Messenger from './pages/messenger/Messenger'
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App({ user }) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          {
            user ?
              < Redirect to="/home" />
              :
              <Login />
          }
        </Route>
        <Route path="/register" exact>
          {
            user ?
              < Redirect to="/home" />
              :
              <Register />
          }
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/profile/:firstname/:lastname">
          <Profile />
        </Route>
        <Route path="/publicProfile/:id">
          <PublicProfile />
        </Route>
        <Route path="/messenger">
          <Messenger />
        </Route>
      </Switch>
    </Router>
  );
}
const mapStateToProps = (state) => ({
  user: state.User_reducer.user.user
});
export default connect(mapStateToProps)(App);