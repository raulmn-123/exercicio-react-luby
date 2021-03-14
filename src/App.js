import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage"
import UserPage from "./pages/UserPage"
import ReposPage from "./pages/ReposPage"
import FollowersPage from './pages/FollowersPage'
import FollowerPage from './pages/FollowerPage'
import FollowingPage from './pages/FollowingPage'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user">
          <UserPage />
        </Route>
        <Route path="/repos">
          <ReposPage />
        </Route>
        <Route path="/followers">
          <FollowersPage />
        </Route>
        <Route path="/follower/:login">
          <FollowerPage followerLogin />
        </Route>
        <Route path="/following">
          <FollowingPage  />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
