import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app.jsx';
import Blog from './blog.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/blog/" component={Blog} />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
