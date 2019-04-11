import React from 'react';
import './css/Sidenav.css';


function MySidenav(props) {
  return (
    <div>
      <ul id="slide-out" class="sidenav sidenav-fixed">
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
        <li><a href="/#about"><i class="material-icons">home</i><b>Home</b></a></li>
        <li><a href="#!"><i class="material-icons">star_border</i>Skills</a></li>
        <li><a href="#!"><i class="material-icons">lightbulb_outline</i>Projects</a></li>
        <li><a href="#!"><i class="material-icons">code</i>Blog</a></li>
      </ul>
    </div>
  );
}

export default MySidenav;
