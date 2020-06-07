import React from 'react';
import './css/sidenav.css';
import me from './me.png'

import { Link } from "react-router-dom";

class MySidenav extends React.Component {
  onLinkClick = async (event) => {
    window.goatcounter.count({
      event: true,
      path: (p) => window.location.host + p + window.location.hash + "&ext=" + event.currentTarget.href,
    })
  }

  render = () => {
    let links;
    if (this.props.blog) {
      links = (
        <li><Link to="/"><i className="material-icons">home</i><b>Home</b></Link></li>
      );
    } else {
      links = (
        <div>
          <li><a href="#about"><i className="material-icons">home</i><b>Home</b></a></li>
          {/*<li><a href="#!"><i className="material-icons">star_border</i>Skills</a></li>*/}
          <li><a href="#projects"><i className="material-icons">lightbulb_outline</i>Projects</a></li>
          <li><Link to="/blog"><i className="material-icons">code</i>Blog</Link></li>
        </div>
      );
    }

    return (
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <li>
            <div className="container">
              <div className="row">
                <div className="col s6 l12">
                  <img src={me} alt="" className="circle responsive-img" />
                </div>
                <div className="col s6 l12">
                  <h4 className="black-text">Angel Senra</h4>
                </div>
              </div>
              <div className="icon-bar">
                <a className="center-align" href="https://github.com/yadkee" onClick={this.onLinkClick}
                  target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i></a>
                <a className="center-align" href="https://www.linkedin.com/in/angelsenra/" onClick={this.onLinkClick}
                  target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i></a>
                <a className="center-align" href="mailto:yadkee@gmail.com" onClick={this.onLinkClick}>
                  <i className="fas fa-envelope"></i></a>
              </div>
            </div>
          </li>
          {links}
        </ul>
      </div>
    );
  }
}

export default MySidenav;
