import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navibar from './components/Navibar';
import Footer from './components/footer';
import Home from './pages/Home';
import info from './pages/info';
import members from './pages/members';
import projects from './pages/projects';
import ticktaktoe from './pages/ticktaktoe';
import NotFound from './pages/NotFound';
import "./App.css"

export default class App extends Component {
  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navibar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/info" component={info}/>
            <Route exact path="/members" component={members}/>
            <Route exact path="/projects" component={projects}/>
            <Route exact path="/projects/ticktaktoe" component={ticktaktoe}/>

            <Route component={NotFound}/>
          </Switch>
          <Footer />
        </BrowserRouter>
    );
  }
}
