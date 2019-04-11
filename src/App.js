import React, { Component } from 'react';
import './css/App.css';
import MySidenav from './Sidenav';
import MyTimeline from './Timeline';
import MyAwards from './Awards';
import M from 'materialize-css';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <MySidenav />
        <div id="main" class="grey-text text-darken-2">
          <div class="container">
            <a href="#about" data-target="slide-out" class="sidenav-trigger"><i class="material-icons medium">menu</i></a>
            <h3 class="center-align" id="about">About me</h3>
            <p class="flow-text">
              I'm a person but this is a prototype so I just want to see how the text would look.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
              <br />
              <br />
              I'm very passionate for dogs, windsurfing and apples!
            </p>

            <h3 class="center-align" id="experience">Experience & Education</h3>
            <MyTimeline />

            <h3 class="center-align" id="competitions">Competitions & Awards</h3>
            <MyAwards />

            <h3 class="center-align" id="projects">Projects</h3>
            To be completed
          </div>
        </div>
      </div>
    );
  }
}

export default App;
