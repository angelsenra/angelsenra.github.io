import React from 'react';
import { render } from 'react-snapshot';
import './css/index.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './app.jsx';
import Blog from './blog.jsx';

render (
  <Router>
    <div>
      <Route path="/build/" exact component={App} />
      <Route path="/build/blog/" component={Blog} />
      <Route path="/" exact component={App} />
      <Route path="/blog/" component={Blog} />
    </div>
  </Router>,
  document.getElementById("root")
);
