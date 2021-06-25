import React from 'react'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import PublicProfile from './pages/publicProfile/PublicProfile'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
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
      </Switch>
    </Router>
  );
}

export default App;
