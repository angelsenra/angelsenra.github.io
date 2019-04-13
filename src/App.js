import React, { Component } from 'react';
import './css/App.css';
import MySidenav from './Sidenav';
import MyTimeline from './Timeline';
import MyAwards from './Awards';
import MyProjects from './Projects';
import M from 'materialize-css';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <MySidenav />
        <div id="main" className="grey-text text-darken-2">
          <div className="container">
            <a href="#about" data-target="slide-out" className="sidenav-trigger"><i className="material-icons medium">menu</i></a>
            <h3 className="center-align" id="about">About me</h3>
            <p className="flow-text">
              Hello!
              <br />
              My name is Angel. I'm a somewhat eclectic programmer.
              <br />
              <br />
              I love working on new things and technologies I don't know.  Routine kills me, but when a project becomes a challenge I can't stop working on it.
              <br />
              Being self-taught for so long has made me very quick to learn new things and handle myself well.
              <br />
              However, I love working as a team with people who bring value and different ideas and I'm not afraid of making decisions.
              <br />
              <br />
              Although I usually do a lot of things at the same time I always have time to answer questions so don't hesitate to contact me if you need anything.
              <br />
              Below you will find more information about me and the projects I have worked on.
            </p>

            <h3 className="center-align" id="experience">Experience & Education</h3>
            <MyTimeline />

            <h3 className="center-align" id="competitions">Competitions & Awards</h3>
            <MyAwards />

            <h3 className="center-align" id="projects">Projects</h3>
            <MyProjects />

            <h3 className="center-align" id="projects">Contact</h3>
            <p className="flow-text">
              <a href="#about" data-target="slide-out" className="sidenav-trigger"><i className="material-icons medium">chevron_left</i></a>
              You can find many ways of contacting me on your left!
              <br />
              <br />
              If you are having any problem with the sidenav here you have my email: yadkee@gmail.com
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
