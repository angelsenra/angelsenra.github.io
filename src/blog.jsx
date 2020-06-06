import React, { Component } from 'react';
import './css/blog.css';
import MySidenav from './sidenav.jsx';
import M from 'materialize-css';

class Blog extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <MySidenav blog />
        <div id="main" className="grey-text text-darken-2">
          <div className="container">
            <a href="#blog" data-target="slide-out" className="sidenav-trigger"><i className="material-icons medium">menu</i></a>
            <h3 className="center-align" id="about">Blog</h3>
            <p className="flow-text">
              Let's pretend this is a blog - 02/06/2019
              <br />
              I promise I'm going to do this at some point - 01/09/2019
              <br />
              I will not procrastinate forever - 6jun'20
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
