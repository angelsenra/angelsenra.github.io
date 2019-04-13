import React from 'react';
import './css/Sidenav.css';


function MySidenav(props) {
  return (
    <div>
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <li>
          <div className="container">
            <div className="row">
              <div className="col s6 l12">
                <img src="me.png" alt="" className="circle responsive-img" />
              </div>
              <div className="col s6 l12">
                <h4 className="black-text">Ángel Senra</h4>
                <h6 className="black-text">yadkee</h6>
              </div>
            </div>
            <div className="icon-bar">
              <a className="center-align" href="https://github.com/yadkee"><i className="fab fa-github"></i></a>
              <a className="center-align" href="https://www.linkedin.com/in/yadkee/"><i className="fab fa-linkedin"></i></a>
              <a className="center-align" href="mailto:yadkee@gmail.com"><i className="fas fa-envelope"></i></a>
              <a className="center-align" href="https://twitter.com/yadkee"><i className="fab fa-twitter"></i></a>
              <a className="center-align" href="https://telegram.me/yadkee"><i className="fab fa-telegram"></i></a>
            </div>
          </div>
        </li>
        <li><a href="#about"><i className="material-icons">home</i><b>Home</b></a></li>
        {/*<li><a href="#!"><i className="material-icons">star_border</i>Skills</a></li>*/}
        <li><a href="#projects"><i className="material-icons">lightbulb_outline</i>Projects</a></li>
        {/*<li><a href="#!"><i className="material-icons">code</i>Blog</a></li>*/}
      </ul>
    </div>
  );
}

export default MySidenav;
