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

function App({ user, token }) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          {
            user != null ?
              < Redirect to="/home" />
              :
              <Login />
          }
        </Route>
        <Route path="/register" exact>
          {
            user != null ?
              < Redirect to="/home" />
              :
              <Register />
          }
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/profile/:firstname/:lastname">
          {
            user != null ?
              <Profile />
              :
              < Redirect to="/" />

          }
        </Route>
        <Route path="/publicProfile/:id">
          <PublicProfile />
        </Route>
        <Route path="/messenger">
          {
            user != null ?
              <Messenger />
              :
              < Redirect to="/" />

          }
        </Route>
      </Switch>
    </Router>
  );
}
const mapStateToProps = (state) => ({
  user: state.User_reducer.user?.user,
  token: state.Token_reducer.token
});
export default connect(mapStateToProps)(App);