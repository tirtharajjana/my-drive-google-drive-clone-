import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./components/Home/Home";
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
// import { useDispatch, useSelector } from 'react-redux'

function App() {
  // const { user } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem('profile'));
  // console.log(user);
  return (

    <BrowserRouter>
      <Navbar />
      <Container maxWidth="xl" >
        <Switch>
          <Route path="/" exact component={() => <Redirect to={`/folder/${user.result.rootFolder}`} />} />
          <Route path="/folder/:id" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/profile" exact component={Profile} />
          <Route  component={NotFound} />
          {/* () => ((!user) ? <Auth /> : <Redirect to="/" />) */}
        </Switch>
      </Container>

    </BrowserRouter>
  );
}

export default App;
