import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

import DashBoard from "./pages/dashBoard";
import Purchase from "./pages/purchase";
import Intro from "./pages/intro";
import Login from "./pages/login";
import Register from "./pages/register";

import { getTables } from "./api/api";

function App() {
  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    // getTables().then(data => setTable(data));
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/purchase" component={Purchase} />
        <Route path="/register">
          {!isLogin ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {!isLogin ? <Login /> : <Redirect to="/" />}
        </Route>
        <Route path='*' component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
