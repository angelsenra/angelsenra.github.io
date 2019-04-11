import React, { Component } from 'react';
import './css/App.css';
import MyTimeline from './Timeline';

class App extends Component {
  render() {
    return (
      <div>
        <ul id="slide-out" class="sidenav sidenav-fixed ">
          <li>
            <div class="container">
              <div class="row">
                <div class="col s6 l12">
                  <img src="me.png" alt="" class="circle responsive-img" />
                </div>
                <div class="col s6 l12">
                  <h4 class="black-text">Ángel Senra</h4>
                  <h6 class="black-text">yadkee</h6>
                </div>
              </div>
              <div class="icon-bar">
                <a href="https://github.com/yadkee"><i class="small fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/yadkee/"><i class="small fab fa-linkedin"></i></a>
                <a href="mailto:yadkee@gmail.com"><i class="small fas fa-envelope"></i></a>
                <a href="https://twitter.com/yadkee"><i class="small fab fa-twitter"></i></a>
                <a href="https://telegram.me/yadkee"><i class="small fab fa-telegram"></i></a>
              </div>
            </div>
          </li>
          <li><a href="#!"><i class="material-icons">home</i><b>Home</b></a></li>
          <li><a href="#!"><i class="material-icons">star_border</i>Skills</a></li>
          <li><a href="#!"><i class="material-icons">lightbulb_outline</i>Projects</a></li>
          <li><a href="#!"><i class="material-icons">code</i>Blog</a></li>
        </ul>
        <a href="#!" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <div id="main" class="grey-text text-darken-2">
          <div class="container">
            <h3 class="center-align">About me</h3>
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

            <h3 class="center-align">Experience & Education</h3>
            <MyTimeline />

            <h3 class="center-align">Competitions & Awards</h3>
            <ul class="collapsible">
              <li>
                <div class="collapsible-header">
                  <i class="material-icons">stars</i>
                  Programming contest for quantitative trading
                <span class="badge">#1</span></div>
                <div class="collapsible-body">
                  <p>dd-mm-yyyy</p>
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  <i class="material-icons">group</i>
                  HP CodeWars Barcelona
                <span class="badge">#4</span></div>
                <div class="collapsible-body">
                  <p>dd-mm-yyyy</p>
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  <i class="material-icons">stars</i>
                  <i class="material-icons">group</i>
                  HP CodeWars Madrid
                <span class="badge">#1</span></div>
                <div class="collapsible-body">
                  <p>dd-mm-yyyy</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
