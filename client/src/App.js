import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./components/Home/Home";
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';


function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Container maxWidth="xl" >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
      
    </BrowserRouter>
  );
}

export default App;
